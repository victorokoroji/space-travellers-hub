import missionServices from '../services/missionServices'

const GET_MISSIONS = 'space-travellers-hub/mission/GET_MISSIONS'
const JOIN_MISSION = 'space-travellers-hub/mission/JOIN_MISSION'

const initialState = []

export const getMissions = () => async dispatch => {
	const result = await missionServices.getMissionLists()
	return dispatch({
		type: GET_MISSIONS,
		payload: result,
	})
}

export const joinMission = id => {
	return {
		type: JOIN_MISSION,
		payload: id,
	}
}

const missionReducer = (state = initialState, action) => {
	const { payload } = action
	switch (action.type) {
		case GET_MISSIONS:
			return [
				...state,
				...payload.map(mission => ({
					mission_id: mission.mission_id,
					mission_name: mission.mission_name,
					description: mission.description,
				})),
			]
		case JOIN_MISSION:
			return state.map(mission => {
				if (mission.mission_id !== payload) return mission
				return { ...mission, reserved: true }
			})
		default:
			return state
	}
}

export default missionReducer
