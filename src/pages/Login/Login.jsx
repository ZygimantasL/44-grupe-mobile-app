import React from 'react';
import { useState } from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../logo.png'
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error ,setError] = useState('');

  function updatePassword(e) {
    setPassword(e.target.value);
    }
  function updateEmail(e) {
      setEmail(e.target.value);
      }  

function handleLogin(e) {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('users')) || [];
    const user = userData.find((u) => u.email === email && u.password === password);

    if (user) {
        navigate('/account', { state: { user } });
    } else {
        setError('Invalid email or password. Please try again.');
    }
}

    return (
    <form className={style.form}>
      <img src={Logo} alt="logo" className={style.logo}/>
                <div className={style.row}>
                <label htmlFor='Email' className={style.heading}>Email</label>
                <input onChange={updateEmail} id='email' type="text" required placeholder='Email' />
                </div>
                <div className={style.row}>
                <label htmlFor='password' className={style.heading} >Password</label>
                <input onChange={updatePassword} id='password' type="password" required placeholder='Your password here' />
                </div>
                <div className={btn.button}>
                <p onClick={handleLogin} className={btn.button}>Login!</p>
                </div>
            </form>
  );
  };