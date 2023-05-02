import React from "react"
import "./WizardDetail.css"
function WizardDetail(props) {
	const { wizard } = props
	return (
		<li className="WizardDetail">
			<h2>{wizard.name}</h2>
			<p>{wizard.description}</p>
		</li>
	)
}

export default WizardDetail
