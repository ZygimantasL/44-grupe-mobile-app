import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './Slider.module.css';

export function Slider () {

  const location = useLocation();
  const [activeSlider, setActiveSlider] = useState(1);

  useEffect(() => {
    const featureNumber = Number(location.pathname.slice(-1));
    setActiveSlider(featureNumber);
  }, [location]);

  return (
    <div className={style.slidersContainer}>
      <div className={`${style.slider} ${activeSlider === 1 ? style.active : ''}`} />
      <div className={`${style.slider} ${activeSlider === 2 ? style.active : ''}`} />
      <div className={`${style.slider} ${activeSlider === 3 ? style.active : ''}`} />
    </div>
  );
};
export default Slider;