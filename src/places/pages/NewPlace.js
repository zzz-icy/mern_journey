import React, { useCallback, useReducer } from "react"

import Button from "../../shared/components/FormElements/Button"
import Input from "../../shared/components/FormElements/Input"
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from "../../shared/util/validators"
import "./PlaceForm.css"
import { useForm } from "../../shared/hooks/form-hook"

const NewPlace = () => {
	const [formState, inputHandler] = useForm(
		{
			title: {
				value: "",
				isValid: false,
			},
			description: {
				value: "",
				isValid: false,
			},
		},
		false
	)

	const placeSubmitHandler = (event) => {
		event.preventDefault()
		console.log(formState.inputs) // send this to backend
	}

	return (
		<form
			className='place-form'
			onSubmit={placeSubmitHandler}
		>
			<Input
				id='title'
				element='input'
				type='text'
				label='Title'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please enter a valid title.'
				onInput={inputHandler}
			/>
			<Input
				id='description'
				element='textarea'
				label='description'
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText='Please enter a valid description(at least 5 characters.'
				onInput={inputHandler}
			/>
			<Input
				id='address'
				element='input'
				type='text'
				label='Address'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please enter a valid address.'
				onInput={inputHandler}
			/>
			<Button
				type='submit'
				disabled={!formState.isValid}
			>
				ADD PLACE
			</Button>
		</form>
	)
}

export default NewPlace

//  specify no dependencies which now means if the component re-renders,
// if the component function re-executes, this function here will be stored away by React and will be reused
// so that no new function object is created whenever the function, the component function renders but that
// instead this function is reused and doesn't change and that then does not lead to use effect to run again to avoid the infinite loop
