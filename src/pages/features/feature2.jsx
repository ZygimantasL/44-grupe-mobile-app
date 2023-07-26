import React from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../service2.png';
import { Link } from 'react-router-dom';

export function Service2() {
    return (
      <div className={style.Home}>
      <img src={Logo} alt="service2" className={style.logo} />
      <h1 className={style.heading}>Feature-2</h1>
      <Link className={btn.button} to="../Service3">Continue</Link>
    </div>
  );
  };
