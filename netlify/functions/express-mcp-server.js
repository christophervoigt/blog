import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import serverless from 'serverless-http'
import express from 'express'

import { setupMCPServer } from '../mcp-server.js'

const app = express()

// Helper function to handle MCP requests
const handleMCPRequest = async (req, res, method) => {
	// In stateless mode, create a new instance of transport and server for each request
	// to ensure complete isolation. A single instance would cause request ID collisions
	// when multiple clients connect concurrently.

	console.log(`Received ${method} MCP request`, method === 'POST' ? { body: req.body } : {})

	try {
		const server = setupMCPServer()
		const transport = new StreamableHTTPServerTransport({
			sessionIdGenerator: undefined,
		})
		await server.connect(transport)

		if (method === 'POST') {
			// Parse the body if it's a string
			const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
			await transport.handleRequest(req, res, body)
		} else {
			// For GET requests, pass the request and response
			await transport.handleRequest(req, res)
		}

		res.on('close', () => {
			console.log(`${method} request closed`)
			transport.close()
			server.close()
		})
	} catch (error) {
		console.error(`Error handling MCP ${method} request:`, error)

		if (!res.headersSent) {
			res.status(500).json({
				jsonrpc: '2.0',
				error: {
					code: -32603,
					message: 'Internal server error',
				},
				id: null,
			})
		}
	}
}

// Use raw body for MCP endpoint to preserve the stream
app.post('/mcp', express.text({ type: '*/*' }), async (req, res) => {
	console.log('POST handler called')
	await handleMCPRequest(req, res, 'POST')
})

app.get('/mcp', async (req, res) => {
	console.log('GET handler called')
	await handleMCPRequest(req, res, 'GET')
})

app.delete('/mcp', (req, res) => {
	console.log('DELETE handler called - returning 405')

	res.status(405).json({
		jsonrpc: '2.0',
		error: {
			code: -32000,
			message: 'Method not allowed.',
		},
		id: null,
	})
})

// Catch-all for debugging
app.all('/mcp', (req, res) => {
	console.log(`Unhandled ${req.method} request to /mcp`)

	res.status(405).json({
		jsonrpc: '2.0',
		error: {
			code: -32000,
			message: `Method ${req.method} not allowed.`,
		},
		id: null,
	})
})

app.use(express.json())

export const handler = serverless(app)
