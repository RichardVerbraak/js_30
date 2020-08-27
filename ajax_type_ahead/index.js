const search = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// Fetches cities and spreads them out in our array
const fetchCities = async () => {
	const res = await fetch(endpoint)
	const data = await res.json()
	cities.push(...data)
}

// Includes is for checking if a string may be found in another string, returning true or false
// Match is matching a string against a regex and the returns an array
const findCityMatch = async (word) => {
	await fetchCities()

	const filtered = cities.filter((place) => {
		const regex = new RegExp(word, 'gi')
		return place.city.match(regex) || place.state.match(regex)
	})

	return filtered
}

const createCity = (cities) => {
	cities.forEach((place) => {
		const li = document.createElement('li')
		li.textContent = place.city
		suggestions.appendChild(li)
	})
}

search.addEventListener('input', (e) => {
	findCityMatch(e.target.value)
	createCity()
})
