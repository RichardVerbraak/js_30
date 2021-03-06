// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
]

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const some = people.some((people) => {
	if (2020 - people.year >= 19) {
		console.log(people)
		return people
	}
})
console.log(some)

// Array.prototype.every() // is everyone 19 or older?
const everyone = people.every(() => {
	if (2020 - people.year >= 19) {
		return people
	}
})
console.log(everyone)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const foundId = comments.find(({ id }) => {
	return id === 823423
})
console.log(foundId)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const foundIdIndex = comments.findIndex(({ id }) => {
	return id === 823423
})
console.log(foundIdIndex)

comments.splice(foundIdIndex, 1)
console.log(comments)
