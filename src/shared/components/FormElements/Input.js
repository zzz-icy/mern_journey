import React from "react"

import "./Input.css"

const Input = (props) => {
	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
			></input>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
			></textarea>
		)

	return (
		<div className={`form-control`}>
			<label htmlFor='id'>{props.label}</label>
			{element}
		</div>
	)
}

export default Input
