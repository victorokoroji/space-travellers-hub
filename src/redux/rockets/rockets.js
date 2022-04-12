import axios from 'axios';

const InitialState = [];
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const BOOK_ROCKET = 'BOOK_ROCKETS';
const CANCEL_BOOKING = 'CANCEL_BOOKING';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: {
    rockets,
  },
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const cancelBooking = (payload) => ({
  type: CANCEL_BOOKING,
  payload,
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

    case BOOK_ROCKET:
      return state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: true } : rocket));

    case CANCEL_BOOKING:
      return state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: false } : rocket));

    default:
      return state;
  }
};

export default rocketReducer;
