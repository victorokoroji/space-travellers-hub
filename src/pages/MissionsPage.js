import React, { useEffect } from 'react'
import Mission from '../components/Mission'
import { useSelector, useDispatch } from 'react-redux'
import { getMissions } from '../redux/missions/mission'

const missions = useSelector(state => state.missionReducer)
console.log(missions)
const dispatch = useDispatch()

useEffect(() => {
	dispatch(getMissions())
}, [])

const Missions = () => (
	<div className='mission'>
		<Mission />
	</div>
)
export default Missions
