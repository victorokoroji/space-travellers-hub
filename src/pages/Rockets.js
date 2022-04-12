import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsFromServer, bookRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketsFromServer());
  }, []);

  return (
    <div className="rocket">
      {rockets.map((rocket) => {
        const {
          id, name, description, images, reserved,
        } = rocket;

        return (
          <div key={id} className="eachRocket">
            <img src={images} alt="rocket" className="rocket-image" />
            <div className="rocket-info">
              <h3>{name}</h3>
              <p className="reserve-sect">
                {reserved === true && (
                <span className="rev-word">
                  Reserved
                </span>
                )}
                {' '}
                {description}
              </p>
              {reserved ? (
                <button type="button" className="cancel-book">
                  Cancel Reservation
                </button>
              ) : (
                <button className="reserveBtn" type="button" onClick={() => dispatch(bookRocket(id))}>Reserve Rocket</button>

              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
