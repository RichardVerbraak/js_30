const hand = document.querySelector('.hand')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

const setHour = () => {
	const now = new Date()
	const hour = now.getHours()
	const hourDegrees = (hour / 12) * 360 + 90
	hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

const setMinute = () => {
	const now = new Date()
	const minute = now.getMinutes()
	const minuteDegrees = (minute / 60) * 360 + 90
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
}

const setSeconds = () => {
	const now = new Date()
	const seconds = now.getSeconds()
	const secondDegrees = (seconds / 60) * 360 + 90
	secondHand.style.transform = `rotate(${secondDegrees}deg)`
}

setInterval(() => {
	setHour()
	setMinute()
	setSeconds()
}, 1000)
