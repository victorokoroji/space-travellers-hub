import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Mission = ({ mission }) => {
  const { mission_id, mission_name, description } = mission;
  return (

    <tr className={mission_id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <span>NOT A MEMBER</span>
      </td>
      <td>
        <Button id={mission_id}>Join Mission</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default Mission;
