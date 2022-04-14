import axios from 'axios';

const MISSION_API = 'https://api.spacexdata.com/v3/missions';

const getMissionLists = async () => {
  try {
    const response = await axios.get(`${MISSION_API}`);
    const datas = await response.data;
    return datas;
  } catch (error) {
    return error;
  }
};

const missionServices = {
  getMissionLists,
};

export default missionServices;
