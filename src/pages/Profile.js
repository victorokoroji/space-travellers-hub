import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <section className="profile">
      <div className="profile-list">
        <div className="join-mission">
          <h2>My Missions</h2>
          <ul className="list">
            {missions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        </div>
        <div className="reserved-rockets">
          <h2>My Rockets</h2>
          <ul className="list">
            <li>jjjjjjjjj</li>
            <li>jjjjjjjjj</li>
            <li>jjjjjjjjj</li>
            <li>jjjjjjjjj</li>
            <li>jjjjjjjjj</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
