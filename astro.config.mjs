import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://christophervoigt.dev/',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: {
				name: 'my-theme',
				settings: [
					{
						scope: ['comment', 'punctuation.definition.comment'],
						settings: {
							foreground: '#737C73',
						},
					},
					{
						scope: ['variable', 'string constant.other.placeholder'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['constant.other.color'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['invalid', 'invalid.illegal'],
						settings: {
							foreground: '#E82424',
						},
					},
					{
						scope: ['storage.type'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['storage.modifier'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['keyword.control.flow', 'keyword.control.conditional', 'keyword.control.loop'],
						settings: {
							fontStyle: 'bold',
							foreground: '#8992A7',
						},
					},
					{
						scope: [
							'keyword.control',
							'constant.other.color',
							'meta.tag',
							'keyword.other.template',
							'keyword.other.substitution',
							'keyword.other',
						],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['keyword.other.definition.ini'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['keyword.control.trycatch'],
						settings: {
							fontStyle: 'bold',
							foreground: '#C4746E',
						},
					},
					{
						scope: ['keyword.other.unit', 'keyword.operator'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: [
							'punctuation',
							'punctuation.definition.tag',
							'punctuation.separator.inheritance.php',
							'punctuation.definition.tag.html',
							'punctuation.definition.tag.begin.html',
							'punctuation.definition.tag.end.html',
							'punctuation.section.embedded',
							'meta.brace',
							'keyword.operator.type.annotation',
							'keyword.operator.namespace',
						],
						settings: {
							foreground: '#9E9B93',
						},
					},
					{
						scope: ['entity.name.tag', 'meta.tag.sgml'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: ['entity.name.function', 'meta.function-call', 'variable.function', 'support.function'],
						settings: {
							foreground: '#8BA4B0',
						},
					},
					{
						scope: ['keyword.other.special-method'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: ['entity.name.function.macro'],
						settings: {
							foreground: '#C4746E',
						},
					},
					{
						scope: ['meta.block variable.other'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['variable.other.enummember'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['support.other.variable'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['string.other.link'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: [
							'constant.numeric',
							'constant.language',
							'support.constant',
							'constant.character',
							'constant.escape',
						],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['constant.language.boolean'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['constant.numeric'],
						settings: {
							foreground: '#A292A3',
						},
					},
					{
						scope: [
							'string',
							'punctuation.definition.string',
							'constant.other.symbol',
							'constant.other.key',
							'entity.other.inherited-class',
							'markup.heading',
							'markup.inserted.git_gutter',
							'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
							'markup.inline.raw.string',
						],
						settings: {
							foreground: '#8A9A7B',
						},
					},
					{
						scope: [
							'entity.name',
							'support.type',
							'support.class',
							'support.other.namespace.use.php',
							'meta.use.php',
							'support.other.namespace.php',
							'support.type.sys-types',
						],
						settings: {
							foreground: '#8EA4A2',
						},
					},
					{
						scope: ['entity.name.type.module', 'entity.name.namespace'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: ['entity.name.import.go'],
						settings: {
							foreground: '#8A9A7B',
						},
					},
					{
						scope: ['keyword.blade'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['variable.other.property'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: ['keyword.control.import', 'keyword.import', 'meta.import'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: [
							'source.css support.type.property-name',
							'source.sass support.type.property-name',
							'source.scss support.type.property-name',
							'source.less support.type.property-name',
							'source.stylus support.type.property-name',
							'source.postcss support.type.property-name',
						],
						settings: {
							foreground: '#8EA4A2',
						},
					},
					{
						scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
						settings: {
							foreground: '#C4746E',
						},
					},
					{
						scope: ['variable.language'],
						settings: {
							foreground: '#C4746E',
						},
					},
					{
						scope: ['entity.name.method.js'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: ['entity.other.attribute-name'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['entity.other.attribute-name.class'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: ['source.sass keyword.control'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: ['markup.inserted'],
						settings: {
							foreground: '#76946A',
						},
					},
					{
						scope: ['markup.deleted'],
						settings: {
							foreground: '#C34043',
						},
					},
					{
						scope: ['markup.changed'],
						settings: {
							foreground: '#DCA561',
						},
					},
					{
						scope: ['string.regexp'],
						settings: {
							foreground: '#B98D7B',
						},
					},
					{
						scope: ['constant.character.escape'],
						settings: {
							foreground: '#949FB5',
						},
					},
					{
						scope: ['*url*', '*link*', '*uri*'],
						settings: {
							fontStyle: 'underline',
						},
					},
					{
						scope: ['tag.decorator.js entity.name.tag.js', 'tag.decorator.js punctuation.definition.tag.js'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
						settings: {
							foreground: '#C4746E',
						},
					},
					{
						scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
						settings: {
							foreground: '#A292A3',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#C4746E',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#8BA4B0',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#A292A3',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: [
							'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
						],
						settings: {
							foreground: '#8A9A7B',
						},
					},
					{
						scope: ['meta.tag JSXNested', 'meta.jsx.children', 'text.html', 'text.log'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['text.html.markdown markup.inline.raw.markdown'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['markdown.heading', 'entity.name.section.markdown', 'markup.heading.markdown'],
						settings: {
							foreground: '#8BA4B0',
						},
					},
					{
						scope: ['markup.italic'],
						settings: {
							fontStyle: 'italic',
							foreground: '#C4746E',
						},
					},
					{
						scope: ['markup.bold', 'markup.bold string'],
						settings: {
							fontStyle: 'bold',
						},
					},
					{
						scope: [
							'markup.bold markup.italic',
							'markup.italic markup.bold',
							'markup.quote markup.bold',
							'markup.bold markup.italic string',
							'markup.italic markup.bold string',
							'markup.quote markup.bold string',
						],
						settings: {
							fontStyle: 'bold',
							foreground: '#C4746E',
						},
					},
					{
						scope: ['markup.underline'],
						settings: {
							fontStyle: 'underline',
							foreground: '#949FB5',
						},
					},
					{
						scope: ['markup.quote punctuation.definition.blockquote.markdown'],
						settings: {
							foreground: '#737C73',
						},
					},
					{
						scope: ['markup.quote'],
						settings: {
							fontStyle: 'italic',
						},
					},
					{
						scope: ['string.other.link.title.markdown'],
						settings: {
							foreground: '#B6927B',
						},
					},
					{
						scope: ['string.other.link.description.title.markdown'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['constant.other.reference.link.markdown'],
						settings: {
							foreground: '#C4B28A',
						},
					},
					{
						scope: ['markup.raw.block'],
						settings: {
							foreground: '#8992A7',
						},
					},
					{
						scope: ['markup.raw.block.fenced.markdown'],
						settings: {
							foreground: '#737C73',
						},
					},
					{
						scope: ['punctuation.definition.fenced.markdown'],
						settings: {
							foreground: '#737C73',
						},
					},
					{
						scope: [
							'markup.raw.block.fenced.markdown',
							'variable.language.fenced.markdown',
							'punctuation.section.class.end',
						],
						settings: {
							foreground: '#C5C9C5',
						},
					},
					{
						scope: ['variable.language.fenced.markdown'],
						settings: {
							foreground: '#737C73',
						},
					},
					{
						scope: ['meta.separator'],
						settings: {
							fontStyle: 'bold',
							foreground: '#9E9B93',
						},
					},
					{
						scope: ['markup.table'],
						settings: {
							foreground: '#C5C9C5',
						},
					},
				],
			},
		},
	},
	build: {
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
})
