import React from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../service1.png';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';

export function Service1() {
    return (
      <div className={style.Home}>
      <img src={Logo} alt="service1" className={style.logo} />
      <Slider />
      <p className={style.skip} onClick={() => window.location.href = '../Register'}>skip</p>
      <h1 className={style.heading}>Feature-1</h1>
      <Link className={btn.button} to="../Service2">Continue</Link>
    </div>
  );
  };
