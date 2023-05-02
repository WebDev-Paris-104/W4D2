import React from "react"

function List() {
	const simpleArray = [1, 2, 3, 4, 9]
	const jsxArray = simpleArray.map((element) => <div>{element}</div>)

	const turtles = [
		{
			name: "Donatello",
			color: "purple",
			weapon: "bo",
		},
		{
			name: "Rafaello",
			color: "red",
			weapon: "sai",
		},
		{
			name: "Leonardo",
			color: "orange",
			weapon: "nunchaku",
		},
		{
			name: "MichelAngelo",
			color: "blue",
			weapon: "katana",
		},
		{
			name: "Splinter",
			color: "grey",
			weapon: "cane",
		},
	]
	return (
		<div>
			<p>Array of numbers:</p>
			{jsxArray}

			<h2>List of turtles</h2>
			<ul>
				{turtles.map((tartaruga) => {
					console.log(tartaruga)

					// return <pre>{JSON.stringify(tartaruga, null, 2)}</pre>
					return (
						<li
							key={tartaruga.name}
							style={{ backgroundColor: tartaruga.color }}>
							<h2>
								{tartaruga.name} {tartaruga.name !== "Splinter" ? "🐢" : "🐀"}
							</h2>
							<p>Weapon of choice: {tartaruga.weapon}</p>

							{/* Ternary operator */}
							{tartaruga.name === "Rafaello" ? (
								<p>He is the best!</p>
							) : (
								<p>You can do better</p>
							)}
							{/* A condition (or multiples) && What we want to rend */}
							{tartaruga.name === "MichelAngelo" && "Hello Michelangelo"}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default List
