const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'hugo', age: 8 },
]

function makeGreen() {
	const p = document.querySelector('p')
	p.style.color = '#BADA55'
	p.style.fontSize = '50px'
}

// Regular
console.log('Hello')

// Interpolated
console.log('Hello I am a %s string', 'F')
const variable = 'F'
console.log(`Hello I am a ${variable} string`)

// Styled
console.log('%c I am some great text', 'font-size:50px')

// warning!
console.warn('Oh no')

// Error :|
console.error('Damn!')

// Info
console.info('Crocodiles eat 3-4 people a year')

// Testing
const p = document.querySelector('p')
console.assert(
	p.classList.contains('ouch'),
	'You did not select the right element'
)

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p)

// Grouping together
dogs.forEach((dog) => {
	console.group(`${dog.name}`)
	console.log(`This is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old`)
	console.groupEnd(`${dog.name}`)
})

// counting
// Counts how many it was logged
console.count()

// timing

const getProfile = async () => {
	console.time('fetching data')
	const res = await fetch('https://api.github.com/users/RichardVerbraak')
	const data = await res.json()
	console.timeEnd('fetching data')
	console.log(data)
}

getProfile()
