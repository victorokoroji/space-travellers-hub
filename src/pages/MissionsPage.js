import React from 'react'
import Mission from '../components/Mission'
import { useSelector, shallowEqual } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
const Missions = () => {
	const missions = useSelector(state => state.missionReducer, shallowEqual)

	return (
		<div className='mission'>
			<table>
				<thead>
					<tr>
						<th>Mission</th>
						<th>Description</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{missions.map(mission => (
						<Mission key={uuidv4()} mission={mission} />
					))}
				</tbody>
			</table>
		</div>
	)
}
export default Missions
