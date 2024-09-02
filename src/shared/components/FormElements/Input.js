import React, { useState, useReducer } from "react"

import "./Input.css"

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return { ...state, value: action.value, isValid: true }
		default:
			return state
	}
}

const Input = (props) => {
	// const [enteredValue, setEnteredValue] = useState()
	// const [error, setError] = useState()
	// manage interconnected multiple states
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
	})

	const changeHandler = (event) => {
		dispatch({ type: "CHANGE", value: event.target.value })
	}
	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				value={inputState.value}
				onChange={changeHandler}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				value={inputState.value}
				onChange={changeHandler}
			/>
		)

	return (
		<div
			className={`form-control ${
				!inputState.isValid && "form-control--invalid"
			}`}
		>
			<label htmlFor='id'>{props.label}</label>
			{element}
			{!inputState.isValid && <p>{props.errorText}</p>}
		</div>
	)
}

export default Input
