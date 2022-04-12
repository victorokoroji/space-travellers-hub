import React from 'react'

const Mission = ({ mission }) => {
	const {mission_id, mission_name, description} = mission
	return (
		<table>
			<tr>
				<th>Mission</th>
				<th>Description</th>
				<th>Status</th>
				<th></th>
			</tr>
			<tr className={mission_id}>
				<td>{mission_name}</td>
				<td>
					{description}
				</td>
				<td>
					<span>NOT A MEMBER</span>
				</td>
				<td>
					<button>Join Mission</button>
				</td>
			</tr>
		</table>
	)
}

export default Mission
