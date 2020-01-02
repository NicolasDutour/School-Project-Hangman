const words = [
	'google',
	'apple',
	'facebook',
	'amazon',
	'microsoft',
	'cdiscount',
	'dell',
	'acer',
	'lenovo',
	'asus',
	'javascript',
	'java',
	'python',
	'django'
]

export const randomWord = () => {
	return words[Math.floor(Math.random() * words.length)].toUpperCase()
}
