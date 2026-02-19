import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'

import { setupMCPServer } from '../mcp-server-setup.js'

export default async (request) => {
	// In stateless mode, create a new instance of transport and server for each request
	// to ensure complete isolation. A single instance would cause request ID collisions
	// when multiple clients connect concurrently.
	const server = setupMCPServer()
	const transport = new WebStandardStreamableHTTPServerTransport({
		sessionIdGenerator: undefined,
	})

	await server.connect(transport)

	let response
	try {
		response = await transport.handleRequest(request)
	} catch (error) {
		await transport.close()
		await server.close()
		throw error
	}

	// Clean up after the response is done
	if (response.body) {
		const originalBody = response.body
		const { readable, writable } = new TransformStream()
		const writer = writable.getWriter()
		const reader = originalBody.getReader()

		;(async () => {
			try {
				while (true) {
					const { done, value } = await reader.read()
					if (done) break
					await writer.write(value)
				}
			} finally {
				await writer.close()
				await transport.close()
				await server.close()
			}
		})().catch((error) => {
			// Prevent unhandled promise rejections from stream processing and cleanup
			console.error('Error while processing MCP server stream:', error)
		})

		return new Response(readable, {
			status: response.status,
			headers: response.headers,
		})
	}

	await transport.close()
	await server.close()

	return response
}

export const config = {
	path: '/mcp',
	preferStatic: false,
}
