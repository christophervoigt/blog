import { z } from 'zod'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

export const setupMCPServer = () => {
	const server = new McpServer(
		{
			name: 'stateless-server',
			version: '1.0.0',
		},
		{
			capabilities: {
				prompts: {},
				resources: {
					subscribe: true,
				},
				tools: {},
				logging: {},
				completions: {},
			},
			instructions: 'This is a stateless MCP server for demonstration purposes.',
		}
	)

	// Tool for notification stream - with direct parameters
	server.registerTool(
		'start-notification-stream',
		{
			title: 'Notification Stream',
			description: 'Starts sending periodic notifications for testing resumability.',
			inputSchema: {
				count: z.number().min(1).describe('Number of notifications to send'),
				interval: z.number().min(100).describe('Interval in milliseconds between notifications'),
			},
			outputSchema: {
				message: z.string(),
			},
		},
		async ({ count, interval }, { sendNotification }) => {
			const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
			let counter = 0

			while (counter < count) {
				counter++
				try {
					await sendNotification({
						method: 'notifications/message',
						params: {
							level: 'info',
							data: `Periodic notification #${counter} at ${new Date().toISOString()}`,
						},
					})
				} catch (error) {
					console.error('Error sending notification:', error)
				}
				// Wait for the specified interval
				await sleep(interval)
			}

			const output = {
				message: `Sent ${count} notifications every ${interval}ms`,
			}

			return {
				content: [
					{
						type: 'text',
						text: output.message,
					},
				],
				structuredContent: output,
			}
		}
	)

	// Register a prompt template that allows the server to
	// provide the context structure and (optionally) the variables
	// that should be placed inside of the prompt for client to fill in.
	server.registerPrompt(
		'greeting-template',
		{
			title: 'Greeting Template',
			description: 'A simple greeting prompt template',
			argsSchema: {
				name: z
					.string()
					.max(100, 'Name must be at most 100 characters long')
					.regex(/^[\p{L}\p{N}\s'_ -]+$/u, 'Name contains invalid characters')
					.describe('Name to include in greeting'),
			},
		},
		({ name }) => {
			const safeName = name.trim()

			return {
				messages: [
					{
						role: 'user',
						content: {
							type: 'text',
							text: `Please greet ${safeName} in a friendly manner.`,
						},
					},
				],
			}
		}
	)

	return server
}
