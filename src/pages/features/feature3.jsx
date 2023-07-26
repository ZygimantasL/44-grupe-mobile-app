import React from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../service3.png';
import { Link } from 'react-router-dom';

export function Service3() {
    return (
      <div className={style.Home}>
      <img src={Logo} alt="service3" className={style.logo} />
      <h1 className={style.heading}>Feature-3</h1>
      <Link className={btn.button} to="../Login">Continue</Link>
    </div>
  );
  };
