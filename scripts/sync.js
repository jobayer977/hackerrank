import { existsSync, lstatSync, readFileSync, readdirSync } from 'fs'

import fs from 'fs'
import metadataParser from 'markdown-yaml-metadata-parser'
import path from 'path'

;

(async function () {
	const fromDir = (startPath, filter, callback) => {
		if (!existsSync(startPath)) {
			console.log('no dir ', startPath)
			return
		}
		const files = readdirSync(startPath)
		for (let i = 0; i < files.length; i++) {
			const filename = path.join(startPath, files[i])
			const stat = lstatSync(filename)
			if (stat.isDirectory()) {
				fromDir(filename, filter, (res) => {
					callback?.(res)
				}) //recurse
			} else if (filename.endsWith(filter)) {
				callback?.(filename)
			}
		}
	}

	const topics = {}
	fromDir(`./docs`, '.md', (filename) => {
		const res = filename.split('/')
		const section = res[1]
		const fileContentString = readFileSync(filename, 'utf8')
		const result = metadataParser(fileContentString)?.metadata
		const content = metadataParser(fileContentString)?.content
		const payload = {
			title: result.title,
			content: content,
			problem: result.Problem,
			section,
		}
		topics[section] = [...(topics[section] || []), payload]
	})

	const tableOfContentsStringForMarkdown = Object.entries(topics)
		.map((x) => {
			return `- ### [${x[0]}](#${slugify(x[0])})\n   ${x[1]
				.map((y) => `- [${y.title}](#${slugify(y?.title)})`)
				.join('\n   ')}\n`
		})
		.join('')
	const topicsStringForMarkdown = Object.entries(topics)
		.map((x) => {
			return `# ${x[0]}\n ${x[1]
				.map((y) => `\n ${y?.content} \n`)
				.join('\n   ')}\n`
		})
		.join('')

	// Write the file
	fs.writeFileSync(
		'./README.md',
		` ## Table of Contents\n\n ${tableOfContentsStringForMarkdown}  <br/><br/><br/><br/> \n\n ${topicsStringForMarkdown}`
	)
	fs.writeFileSync('./json/topics.json', JSON.stringify(topics))
})()

// mark string to slug
function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}
