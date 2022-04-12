import missionServices from '../services/missionServices'

export const GET_MISSIONS = 'space-travellers-hub/mission/GET_MISSIONS'

const initialState = []

export const getMissions = () => async dispatch => {
	const result = await missionServices.getMissionLists()
	return dispatch({
		type: GET_MISSIONS,
		payload: result,
	})
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
		default:
			return state
	}
}

export default missionReducer
