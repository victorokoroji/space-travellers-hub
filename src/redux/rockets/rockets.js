import axios from 'axios';

const InitialState = [];
const FETCH_ROCKETS = 'FETCH_ROCKETS';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: {
    rockets,
  },
});

export const fetchRocketsFromServer = () => async (dispatch) => {
  const rockets = await axios.get(baseUrl);
  const mappedRockets = rockets.data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    images: rocket.flickr_images[0],
    description: rocket.description,
  }));
  dispatch(fetchRockets(mappedRockets));
};

const rocketReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, ...action.payload.rockets];
    default:
      return state;
  }
};

export default rocketReducer;
