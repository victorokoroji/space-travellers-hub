import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Button from '../components/Button';
import { leaveMission } from '../redux/missions/mission';

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);
  const rockets = useSelector((state) => (state.rockets.filter((rocket) => rocket.reserved)));
  const dispatch = useDispatch();

  return (
    <section className="profile">
      <div className="profile-list">
        <div className="join-mission">
          <h2>My Missions</h2>
          {missions[0] ? (
            <ul className="list">
              {missions.map((mission) => (
                <li key={mission.mission_id}>
                  <span>{mission.mission_name}</span>
                  <Button
                    className="join"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    Leave Mission
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="message"> No missions joined yet</div>
          )}
        </div>
        <div className="reserved-rockets">
          <h2>My Rockets</h2>
          {rockets[0] ? (
            <ul className="list">
              {
            rockets.map((rocket) => (
              <li className="item" key={rocket.id}>
                {rocket.name}
              </li>
            ))
          }
            </ul>
          ) : (
            <div className="message"> No Reservations yet</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
