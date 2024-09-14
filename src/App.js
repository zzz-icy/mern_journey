import "./App.css"
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom"
import Users from "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import UserPlaces from "./places/pages/UserPlaces"
import UpdatePlace from "./places/pages/UpdatePlace"
import Auth from "./user/pages/Auth"
import { AuthContext } from "./shared/context/auth-context"
import { useCallback, useState } from "react"

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState()
	const login = useCallback(() => {
		setIsLoggedIn(true)
	}, [])
	const logout = useCallback(() => {
		setIsLoggedIn(false)
	}, [])
	return (
		//  whenever any of these values changes, this will all be passed down to all the child component
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			<Router>
				<MainNavigation />
				<main>
					<Switch>
						<Route
							path='/'
							exact
						>
							<Users />
						</Route>
						<Route
							path='/auth'
							exact
						>
							<Auth />
						</Route>
						<Route path='/:userId/places'>
							<UserPlaces />
						</Route>

						<Route
							path='/places/new'
							exact
						>
							<NewPlace />
						</Route>
						<Route
							path='/places/:placeId'
							exact
						>
							<UpdatePlace />
						</Route>
						<Redirect to='/' />
					</Switch>
				</main>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
