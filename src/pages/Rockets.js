import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsFromServer } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketsFromServer());
  }, []);

  return (
    <div className="rocket">
      {rockets.map((rocket) => {
        const {
          id, name, description, images,
        } = rocket;

        return (
          <div key={id} className="eachRocket">
            <img src={images} alt="rocket" className="rocket-image" />
            <div className="rocket-info">
              <h3>{name}</h3>
              <p>{description}</p>
              <button className="reserveBtn" type="button">Reserve Rocket</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
