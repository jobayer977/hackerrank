/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
	return address.replace(/\./g, '[.]')
}
var defangIPaddr = function (address) {
	return address
		.split('')
		.map((x) => (x === '.' ? '[.]' : x))
		.join('')
}
