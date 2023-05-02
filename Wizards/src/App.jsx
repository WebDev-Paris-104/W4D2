import Title from "./components/Title/Title"
import "./App.css"
import Container from "./components/Container/Container"
import User from "./components/User/User"
import WizardDetail from "./components/WizardDetail/WizardDetail"
import jsonWizards from "./wizards.json"
import { useState } from "react"

import dobbyPicture from "./assets/Dobby_WB_F2_DobbyClickingFingersCastingSpell_Still_080615_Land.jpg"
const initialWizards = jsonWizards.slice(0, 3)

function App() {
	const [wizards, setWizards] = useState(initialWizards)
	console.log(crypto.randomUUID())

	function handleSortDescending() {
		const copy = [...wizards]
		copy.sort((a, b) => b.name.localeCompare(a.name))
		setWizards(copy)
	}
	function handleSortAscending() {
		const copy = [...wizards]
		copy.sort((a, b) => {
			return a.name.localeCompare(b.name)
		})

		setWizards(copy)

		// const sorted = wizards.toSorted((a, b) => {
		// 	return a.name.localeCompare(b.name)
		// })
		// setWizards(sorted)
	}

	function handleAdd() {
		// I know the id's of every character in my state

		if (wizards.length === jsonWizards.length) {
			return console.log("Added everyone")
		}

		const idThatIDontWant = wizards.map((wizard) => wizard.id)
		console.log(idThatIDontWant)
		const filteredWizards = jsonWizards.filter((wizard) => {
			if (idThatIDontWant.includes(wizard.id)) {
				return false
			}
			return true
		})
		console.log("filteredWizards", filteredWizards)

		const randomIndex = Math.floor(Math.random() * filteredWizards.length)
		const randomWizard = filteredWizards[randomIndex]
		const newState = [...wizards, randomWizard]
		setWizards(newState)

		/**
		 * Add a random wizard
		 * We should not add a wizard which was already added
		 *
		 */
	}

	function handleDelete(idWeWantToRemove) {
		const filteredWizard = wizards.filter((wizard) => {
			//If the id of my Wizard is the same as the id I want to remove
			// I would need to return false
			//If the id's are different I would need to return true to Add the wizard in
			// The filteredWizzard array
			if (wizard.id === idWeWantToRemove) {
				return false
			} else {
				return true
			}
		})
		setWizards(filteredWizard)

		// setWizards(wizards.filter((wizard) => wizard.id !== idWeWantToRemove))
	}

	console.log(wizards)
	// const user = {
	// 	name: "Bob",
	// 	work: "Carpenter",
	// }
	return (
		<>
			<button onClick={handleSortAscending}>Sort by name Ascending</button>
			<button onClick={handleSortDescending}>Sort by name Descending</button>
			<button onClick={handleAdd}>Add a random Wizard</button>
			<img src="images/strong-albus-dumbledore-1502806023.jpg" alt="" />
			<img src={dobbyPicture} alt="" />
			<ul>
				{wizards.map((wizard) => {
					// return <WizardDetail key={wizard.id} wizard={wizard} />

					return (
						<li key={wizard.id} className="WizardDetail">
							<h2>{wizard.name}</h2>
							<p>{wizard.description}</p>
							<button onClick={() => handleDelete(wizard.id)}>Delete</button>
						</li>
					)
				})}
			</ul>

			{/* <Title>My super application</Title>
			<Title>H1 Should not be repeated</Title>
			{User({ name: user.name, work: user.work })}
			<Container>
				<User name={user.name} work={user.work} />
			</Container> */}
		</>
	)
}

export default App
