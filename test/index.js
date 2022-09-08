/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	message
		.replace(/\s/g, '')
		.split('')
		.map((x, i) => {
			const valueIndexInKey = key.indexOf(x)
			console.log(alphabet.length)
			console.log(alphabet[valueIndexInKey])
		})
}

decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')
