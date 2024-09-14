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

const App = () => {
	return (
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
	)
}

export default App
