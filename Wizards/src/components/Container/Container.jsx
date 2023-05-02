import React from "react"

function Container(props) {
	const containerStyle = {
		backgroundColor: "blue",
		color: "whitesmoke",
		padding: "2rem",
		borderRadius: "1rem",
	}
	return <div style={containerStyle}>{props.children}</div>
}

export default Container
