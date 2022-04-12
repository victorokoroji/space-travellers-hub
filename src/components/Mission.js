import React from 'react'
import Button from './Button'

const Mission = ({ mission }) => {
	const { mission_id, mission_name, description } = mission
	return (
			<tr className={mission_id}>
				<td>{mission_name}</td>
				<td>{description}</td>
				<td>
					<span>NOT A MEMBER</span>
				</td>
				<td>
					<Button id={mission_id}>Join Mission</Button>
				</td>
			</tr>
	)
}

export default Mission
