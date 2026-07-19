import { transformerColorizedBrackets } from '@shikijs/colorized-brackets'

const shikiConfig = {
	langs: ['html', 'css', 'javascript'],
	transformers: [transformerColorizedBrackets()],
	theme: {
		name: 'my-theme',
		settings: [
			// Font styles
			{
				scope: ['punctuation.definition.bold', 'markup.bold', 'markup.heading'],
				settings: {
					fontStyle: 'bold',
				},
			},
			{
				scope: ['punctuation.definition.italic', 'markup.italic'],
				settings: {
					fontStyle: 'italic',
				},
			},
			// Colors
			{
				scope: ['entity.name.type', 'support.type.graphql', 'text', 'source.css'],
				settings: {
					foreground: '#FFFFFF',
				},
			},
			{
				scope: [
					'text',
					'comment',
					'entity.other.inherited-class',
					'variable.parameter',
					'meta.class',
					'support.variable.property',
					'variable.scss',
					'variable.css',
					'variable.object.property.ts',
					'punctuation.definition.arguments.begin.python',
					'punctuation.definition.arguments.end.python',
					'meta.brace.round.graphql',
					'meta.brace.square.graphql',
					'punctuation.operation.graphql',
					'punctuation.separator.key-value.css',
					'punctuation.terminator.rule.css',
					'punctuation.definition.metadata.markdown',
					'markup.underline.link.markdown',
					'markup.underline.link.image.markdown',
					'punctuation.definition.string.begin.markdown',
					'punctuation.definition.string.end.markdown',
					'punctuation.definition.metadata.markdown',
				],
				settings: {
					foreground: '#D6D6D6',
				},
			},
			{
				scope: [
					'keyword',
					'entity.other.attribute-name',
					'punctuation.colon.graphql',
					'punctuation.or.graphql',
					'punctuation.assignment.graphql',
					'support.function',
					'variable.legacy.builtin.python',
				],
				settings: {
					foreground: '#CC7833',
				},
			},
			{
				scope: [
					'storage',
					'keyword.type.graphql',
					'keyword.interface.graphql',
					'meta.type.interface.graphql',
					'keyword.implements.graphql.RRR',
				],
				settings: {
					foreground: '#FF9834',
				},
			},
			{
				scope: [
					'constant',
					'constant.variable',
					'support.type',
					'string.other.link',
					'markup.heading punctuation.definition.heading',
				],
				settings: {
					foreground: '#6C99BB',
				},
			},
			{
				scope: ['constant.character.escape'],
				settings: {
					foreground: '#A1617A',
				},
			},
			{
				scope: [
					'constant.numeric',
					'string',
					'support.constant.property-value.css',
					'keyword.other.unit',
					'markup.inline.raw',
				],
				settings: {
					foreground: '#B4C973',
				},
			},
			{
				scope: ['variable', 'variable.legacy.builtin.python'],
				settings: {
					foreground: '#D0D0FF',
				},
			},
			{
				scope: [
					'entity.name.function',
					'meta.tag',
					'punctuation.section.embedded.begin.js.jsx',
					'punctuation.section.embedded.end.js.jsx',
					'meta.embedded.expression',
					'entity.name.tag',
					'meta.function-call.python',
					'variable.legacy.builtin.python',
					'meta.tag.without-attributes.tsx',
					'meta.embedded.expression.tsx',
				],
				settings: {
					foreground: '#FFC66D',
				},
			},
			{
				scope: ['meta.jsx.children'],
				settings: {
					foreground: '#B3B1AF',
				},
			},
			{
				scope: ['meta.jsx.children.tsx'],
				settings: {
					foreground: '#AB8448',
				},
			},
			{
				scope: 'token.info-token',
				settings: {
					foreground: '#6796E6',
				},
			},
			{
				scope: 'token.warn-token',
				settings: {
					foreground: '#CD9731',
				},
			},
			{
				scope: 'token.error-token',
				settings: {
					foreground: '#F44747',
				},
			},
			{
				scope: 'token.debug-token',
				settings: {
					foreground: '#B267E6',
				},
			},
		],
	},
}

export default shikiConfig
