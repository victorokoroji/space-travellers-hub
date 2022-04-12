import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { joinMission, leaveMission } from '../redux/missions/mission';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const {
    mission_id, mission_name, description, reserved,
  } = mission;

  return (
    <tr className={mission_id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <span>NOT A MEMBER</span>
      </td>
      <td>
        {reserved ? (
          <Button className="join" onClick={() => dispatch(leaveMission(mission_id))}>
            Leave Mission
          </Button>
        ) : (
          <Button className="leave" onClick={() => dispatch(joinMission(mission_id))}>
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,
    PropTypes.number, PropTypes.bool])).isRequired,
};

export default Mission;
