import React from "react"
import "./UserItem.css"
import Avatar from "../../shared/components/UIElements/Avatar"
import { Link } from "react-router-dom"
const UserItem = (props) => {
	return (
		<li className='user-item'>
			<div className='user-item__content'>
				<div className='user-item__image'>
					<Link to={`/${props.id}/places`}>
						<Avatar
							image={props.image}
							alt={props.name}
						/>
					</Link>
				</div>
				<div className='user-item__info'>
					<h2>{props.name}</h2>
					<h3>
						{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
					</h3>
				</div>
			</div>
		</li>
	)
}

export default UserItem
