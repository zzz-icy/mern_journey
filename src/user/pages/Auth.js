import React, { useCallback, useEffect, useReducer, useState } from "react"

import "./Auth.css"
import { useForm } from "../../shared/hooks/form-hook"
import Card from "../../shared/components/UIElements/Card"
import Input from "../../shared/components/FormElements/Input"
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from "../../shared/util/validators"
import Button from "../../shared/components/FormElements/Button"

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: "",
				isValid: false,
			},
			password: {
				value: "",
				isValid: false,
			},
		},
		false
	)
	const authSubmitHandler = (event) => {
		event.preventDefault()
		console.log(formState.inputs)
	}
	const switchModeHandler = (event) => {
		if (!isLogin) {
			setFormData(
				{ ...formState.inputs, name: undefined },
				formState.inputs.email.isValid && formState.inputs.password.isValid
			)
		} else {
			setFormData(
				{
					...formState.input,
					name: {
						value: "",
						isValid: false,
					},
				},
				false
			)
		}

		setIsLogin((prevMode) => !prevMode)
	}
	return (
		<Card className='authentication'>
			<h2>Login Required</h2>
			<hr />
			<form
				className='auth-form'
				onSubmit={authSubmitHandler}
			>
				{!isLogin && (
					<Input
						id='name'
						element='input'
						type='text'
						label='Your Name'
						validators={[VALIDATOR_REQUIRE()]}
						errorText='Please enter a name.'
						onInput={inputHandler}
					/>
				)}
				<Input
					id='email'
					element='input'
					type='text'
					label='E-Mail'
					validators={[VALIDATOR_EMAIL()]}
					errorText='Please enter a valid email.'
					onInput={inputHandler}
				/>
				<Input
					id='password'
					element='input'
					type='text'
					label='Password'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid password, at least 5 characters'
					onInput={inputHandler}
				/>
				<Button
					type='submit'
					disabled={!formState.isValid}
				>
					{isLogin ? "LOGIN" : "SIGNUP"}
				</Button>
			</form>
			<Button
				inverse
				onClick={switchModeHandler}
			>
				SWITCH TO {isLogin ? "SIGNUP" : "SIGNIN"}
			</Button>
		</Card>
	)
}

export default Auth
