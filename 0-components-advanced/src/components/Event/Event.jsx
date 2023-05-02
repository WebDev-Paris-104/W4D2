import React from "react"

function Event() {
	function handleHover() {
		console.log("Hovering")
	}

	function handleMouseLeave(event) {
		console.log("Just left!", event)
	}

	function handleInput(event) {
		console.log("Input activated")
		console.log(event.target)
		console.log(event.target.value)
	}
	return (
		<div>
			<h1 onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
				Hover me
			</h1>
			<button onClick={() => console.log("clickety click")}>Click me</button>

			<input type="text" onChange={handleInput} />
		</div>
	)
}

export default Event
