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
          id, name, type, images,
        } = rocket;

        return (
          <div key={id} className="eachRocket">
            <img src={images} alt="rocket" className="rocket-image" />
            <p>{name}</p>
            <p>{type}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Rockets;
