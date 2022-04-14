import missionServices from '../services/missionServices';

const GET_MISSIONS = 'space-travellers-hub/mission/GET_MISSIONS';
const JOIN_MISSION = 'space-travellers-hub/mission/JOIN_MISSION';
const LEAVE_MISSION = 'space-travellers-hub/mission/LEAVE_MISSION';
const GET_JOINED_MISSION = 'space-travellers-hub/mission/GET_JOINED_MISSION';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  const result = await missionServices.getMissionLists();
  return dispatch({
    type: GET_MISSIONS,
    payload: result,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const getJoinedMission = () => ({
  type: GET_JOINED_MISSION,
});

const missionReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_MISSIONS:
      return [
        ...state,
        ...payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        })),
      ];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== payload) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== payload) return mission;
        return { ...mission, reserved: false };
      });
    case GET_JOINED_MISSION:
      return state.filter((mission) => mission.reserved === true);
    default:
      return state;
  }
};

export default missionReducer;
