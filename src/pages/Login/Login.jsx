import React from 'react';
import { useState } from 'react';
import btn from '../../components/button.module.css';
import style from './Login.module.css'
import Logo from '../../logo.png'
import { Link } from 'react-router-dom';

export function Login() {
  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const fullname = `${name} ${password}`.trim();

function updateName(event) {
  setName(event.target.value);
}

function updatepassword(event) {
  setpassword(event.target.value);
}
    return (
    <form className={style.form}>
                <div className={style.row}>
                <label htmlFor='name'>Name</label>
                <input onChange={updateName} value={name} id='name' type="text" required placeholder='Your name here' />
                </div>
                <div className={style.row}>
                <label htmlFor='password'>Password</label>
                <input onChange={updatepassword} id='password' type="password" required placeholder='Your password here' />
                </div>
                <div className={btn.button}>
                <a type='submit' className='btn'>Login!</a>
                </div>
            </form>
  );
  };