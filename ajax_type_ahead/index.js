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
	console.log(filtered)
	return filtered
}

// I kept creating li items and appending them all continually to the ul instead of looping over and creating an li for each place and store that in a variable
// and then appending that variable (containing all of the li's) to the ul, OOPS!
// I also used forEach for creating all elements instead of map like below.
const createList = (filtered, searchInput) => {
	const html = filtered
		.map((place) => {
			const regex = new RegExp(searchInput, 'gi')
			const cityName = place.city.replace(
				regex,
				`<span class="hl">${searchInput}</span>`
			)
			const stateName = place.city.replace(
				regex,
				`<span class="hl">${searchInput}</span>`
			)
			return `<li>
		<span class="name">${cityName}, ${stateName}</span>
		<span class="population">${place.population}</span>
		</li>`
		})
		.join('')
	suggestions.innerHTML = html
}

search.addEventListener('input', async (e) => {
	const filteredCities = await findCityMatch(e.target.value)
	createList(filteredCities, e.target.value)
})
