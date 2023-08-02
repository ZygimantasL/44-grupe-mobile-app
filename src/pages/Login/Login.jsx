import React from 'react';
import { useState } from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../logo.png'
import { Link } from 'react-router-dom';

export function Login() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const fullname = `${name} ${password}`.trim();

function updateName(event) {
  setUsername(event.target.value);
}

function updatePassword(event) {
  setPassword(event.target.value);
}
    return (
    <form className={style.form}>
      <img src={Logo} alt="logo" className={style.logo}/>
                <div className={style.row}>
                <label htmlFor='name' className={style.heading}>Name</label>
                <input onChange={updateName} value={name} id='name' type="text" required placeholder='Your name here' />
                </div>
                <div className={style.row}>
                <label htmlFor='password' className={style.heading} >Password</label>
                <input onChange={updatePassword} id='password' type="password" required placeholder='Your password here' />
                </div>
                <div className={btn.button}>
                <a type='submit' className={btn.button}>Login!</a>
                </div>
            </form>
  );
  };