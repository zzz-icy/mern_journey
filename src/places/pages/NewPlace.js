import React, { useCallback } from "react"

import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_REQUIRE } from "../../shared/util/validators"
import "./NewPlace.css"

const NewPlace = () => {
	const titleInputHandler = useCallback((id, value, isValid) => {}, [])
	//  specify no dependencies which now means if the component re-renders,
	// if the component function re-executes, this function here will be stored away by React and will be reused
	// so that no new function object is created whenever the function, the component function renders but that
	// instead this function is reused and doesn't change and that then does not lead to use effect to run again to avoid the infinite loop
	const descriptionInputHandler = useCallback((id, value, isValid) => {}, [])

	return (
		<form className='place-form'>
			<Input
				element='input'
				type='text'
				label='Title'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please enter a valid title.'
				onInput={titleInputHandler}
			/>
			<Input
				element='input'
				label='textarea'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please enter a valid title.'
				onInput={descriptionInputHandler}
			/>
		</form>
	)
}

export default NewPlace
