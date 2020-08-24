const inputs = document.querySelectorAll('.controls input')
const root = document.documentElement

/////////// Wes Bos's Version
// If I used an arrow function, 'this' would be bound to the scope of this function, so it would be referencing nothing hence undefined returning
// With a regular function it depends on where the function would be called
// function handleUpdate() {
// 	const suffix = this.dataset.sizing || ''
// 	root.style.setProperty(`--${this.name}`, this.value + suffix)
// }

// inputs.forEach((input) => input.addEventListener('change', handleUpdate))
// inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))

// My solution
const handleUpdate = (e) => {
	const suffix = e.target.dataset.sizing || ''
	root.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
}

inputs.forEach((input) => {
	input.addEventListener('change', (e) => {
		handleUpdate(e)
	})
})

inputs.forEach((input) => {
	input.addEventListener('mousemove', (e) => {
		handleUpdate(e)
	})
})
