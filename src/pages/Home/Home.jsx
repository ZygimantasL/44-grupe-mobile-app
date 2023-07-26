import React from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../logo.png';
import { Link } from 'react-router-dom';

export function Home() {
    return (
      <div className={style.Home}>
      <img src={Logo} alt="Logo" className={style.logo} />
      <h1 className={style.heading}>Shopping platform!</h1>
      <Link className={btn.button} to="../Service1">Get started!</Link>
    </div>
  );
  };
  