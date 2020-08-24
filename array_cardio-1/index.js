// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
	'Beck, Glenn',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Beethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsen, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Billings, Josh',
	'Biondo, Frank',
	'Birrell, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filtered = inventors.filter((inventor) => {
	return inventor.year < 1600 && inventor.year > 1500
})

console.log(filtered)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const mapped = inventors.map((inventor) => {
	return inventor.first + ' ' + inventor.last
})

console.log(mapped)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((a, b) => {
	if (a.year > b.year) {
		return -1
	}

	if (a.year < b.year) {
		return 1
	}

	return 0
})

console.log(oldestToYoungest)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// Could also just pass currentValue as a param and get access to it with currentValue.year
const sumYearsLived = inventors.reduce((accumulator, { passed, year }) => {
	return accumulator + (passed - year)
}, 0)

console.log(sumYearsLived)

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
	if (a.passed - a.year > b.passed - b.year) {
		return -1
	}

	if (a.passed - a.year < b.passed - b.year) {
		return 1
	}

	return 0
})

console.log(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Paste below code in the console on the before mentioned wikipedia page

// const links = document.querySelectorAll('.mw-category a')

// // Converts a nodelist to an array so we can use array methods like map
// // Could also use array.from()
// const nodeArray = [...links]
// const de = nodeArray
// 	.map((street) => {
// 		return street.textContent
// 	})
// 	.filter((street) => {
// 		return street.includes('de')
// 	})

// console.log(de)

// 7. sort Exercise
// Sort the people alphabetically by last name

// Array is already sorted so I don't know why this exercise is here and I also think you can get away with just saying .sort()

const lastNames = people.sort((a, b) => {
	const [aLast, aFirst] = a.split(', ')
	const [bLast, bFirst] = b.split(', ')

	if (aLast > bLast) {
		return 1
	} else {
		return -1
	}
})

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
]

// 1. Our accumulator is an empty object at first
// 2. We check to see if there is an object with the name of a vehicle like -- truck or car
// 3. If there isn't make one and set it's value to 0
// 4. Then continue on and increment it by one since there now is an object with the name of a vehicle
const transportation = data.reduce((accumulator, vehicle) => {
	if (!accumulator[vehicle]) {
		accumulator[vehicle] = 0
	}

	accumulator[vehicle]++

	return accumulator
}, {})

console.log(transportation)
