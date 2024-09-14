import { useCallback, useReducer } from "react"

export const formReducer = (state, action) => {
	switch (action.type) {
		case "INPUT_CHANGE":
			let formIsValid = true
			for (const inputId in state.inputs) {
				if (!state.inputs[inputId]) {
					continue
				}
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid
				}
			}

			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			}
		case "SET_DATA":
			return {
				inputs: action.inputs,
				formValidity: action.formValidity,
			}

		default:
			return state
	}
}

export const useForm = (initialInputs, initialFormValidity) => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: initialInputs,
		isValid: initialFormValidity,
	})

	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid })
	}, [])

	const setFormData = useCallback((inputData, formValidity) => {
		dispatch({
			type: "SET DATA",
			inputs: inputData,
			formValidity: formValidity,
		})
	}, [])

	return [formState, inputHandler, setFormData]
}
