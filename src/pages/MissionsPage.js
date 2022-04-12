import React, { useEffect } from 'react'
import Mission from '../components/Mission'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getMissions } from '../redux/missions/mission'

const Missions = () => {
	const missions = useSelector(state => state.missionReducer, shallowEqual)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMissions())
	}, [])

	return (
		<div className='mission'>
			{missions.map(mission => (
				<Mission key={mission.mission_id} mission={mission} />
			))}
		</div>
	)
}
export default Missions
