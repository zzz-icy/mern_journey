import React from "react"
import UsersList from "../components/UsersList"

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Aurelia Sun",
			image:
				"https://images.unsplash.com/photo-1724805053809-3c09736b2ade?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			places: 3,
		},
	]
	return <UsersList items={USERS} />
}

export default Users
