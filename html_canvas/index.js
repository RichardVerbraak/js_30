const canvas = document.querySelector('#draw')

// Give context to what were drawing the canvas on (2d or 3d)
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 100

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0

let direction = true

canvas.addEventListener('mousemove', (e) => {
	if (isDrawing) {
		// Frankenstein creation of colors
		// let R = Math.floor(Math.random() * 255)
		// let G = Math.floor(Math.random() * 255)
		// let B = Math.floor(Math.random() * 255)

		context.strokeStyle = `hsl(${hue}, 100%, 50%)`

		context.beginPath()
		context.moveTo(lastX, lastY)

		context.lineTo(e.offsetX, e.offsetY)
		context.stroke()
		lastX = e.offsetX
		lastY = e.offsetY

		hue++
		if (hue >= 360) {
			hue = 0
		}

		console.log(context.lineWidth)
		if (context.lineWidth >= 100) {
			context.lineWidth--
		} else if (context.lineWidth <= 1) {
			context.lineWidth++
		}

		// if (context.lineWidth >= 100 || context.lineWidth <= 1) {
		// 	direction = !direction
		// }

		// if (direction) {
		// 	context.lineWidth++
		// } else {
		// 	context.lineWidth--
		// }

		// context.strokeStyle = `rgb(${R}, ${G}, ${B})`
	}
})

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true
	lastX = e.offsetX
	lastY = e.offsetY
})

canvas.addEventListener('mouseup', () => {
	isDrawing = false
})

canvas.addEventListener('mouseout', () => {
	isDrawing = false
})
