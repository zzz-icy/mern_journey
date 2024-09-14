import React, { useContext } from "react"
import { NavLink } from "react-router-dom"

import "./NavLinks.css"
import { AuthContext } from "../../context/auth-context"
import Button from "../FormElements/Button"

const NavLinks = (props) => {
	const auth = useContext(AuthContext)
	return (
		<ul className='nav-links'>
			<li>
				<NavLink
					to='/'
					exact
				>
					ALL USERS{" "}
				</NavLink>
			</li>
			<li>
				{auth.isLoggedIn && <NavLink to='/u1/places'> MY PLACES</NavLink>}
			</li>
			<li>
				{auth.isLoggedIn && <NavLink to='/places/new'>ADD PLACE</NavLink>}
			</li>
			<li>{!auth.isLoggedIn && <NavLink to='/auth'> AUTHENTICATE</NavLink>}</li>
			{auth.isLoggedIn && (
				<li>
					<Button onClick={auth.logout}>LOGOUT</Button>
				</li>
			)}
		</ul>
	)
}
export default NavLinks
