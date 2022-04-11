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
  const {payload} = action
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...Object.entries(payload).map((mission) => {
            id: mission[0]
          } )
      }
    default:
      break;
  }
}