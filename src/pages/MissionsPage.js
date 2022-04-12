import React, { useEffect } from 'react'
import Mission from '../components/Mission'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getMissions } from '../redux/missions/mission'

const Missions = () => {
	const missions = useSelector(state => state.missionReducer, shallowEqual)
	console.log(missions)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMissions())
	}, [])

	return (
		<div className='mission'>
			<Mission />
		</div>
	)
}
export default Missions
