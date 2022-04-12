import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { joinMission } from '../redux/missions/mission'

const Mission = ({ mission }) => {
	const dispatch = useDispatch()
	const { mission_id, mission_name, description, reserved } = mission
	console.log(mission, reserved)
	return (
		<tr className={mission_id}>
			<td>{mission_name}</td>
			<td>{description}</td>
			<td>
				<span>NOT A MEMBER</span>
			</td>
			<td>
				<Button
					id={mission_id}
					className={reserved ? 'join' : 'leave'}
					onClick={() => dispatch(joinMission(mission_id))}
				>
					Join Mission
				</Button>
			</td>
		</tr>
	)
}

Mission.propTypes = {
	mission: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
}

export default Mission
