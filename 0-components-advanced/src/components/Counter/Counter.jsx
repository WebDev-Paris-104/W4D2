import { useState } from "react"

function Counter() {
	// const myState = React.useState("what?")
	// console.log(myState)

	const [counter, setCounter] = useState(0)
	//    stateValue  stateSetter         | original value
	const [color, setColor] = useState("hsl(0, 50%, 50%)")

	function handleDecrement() {
		setCounter(counter - 1)
		const newColor = randomColor()
		setColor(newColor)
	}

	function handleIncrement() {
		setCounter((currentValue) => currentValue + 1)
		setCounter((currentValue) => currentValue + 1)
	}
	console.log(counter)
	return (
		<div>
			<button onClick={handleDecrement}> - </button>
			<h1 style={{ color: color }}>{counter}</h1>
			<button onClick={handleIncrement}> + </button>
		</div>
	)
}

function randomColor() {
	return `hsl(${Math.random() * 360}, 50%, 50%)`
}
export default Counter
