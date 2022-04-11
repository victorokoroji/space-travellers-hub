import missionServices from '../services/missionServices'

const GET_MISSIONS = 'space-travellers-hub/mission/GET_MISSIONS'

const initialState = {}

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
			return {
				...Object.entries(payload).map(mission => ({
					mission_id: mission[0],
					mission_name: mission[1],
					description: mission[2],
				})),
			}
		default:
			break
	}
}

export missionReducer