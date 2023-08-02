import React from 'react';
import { useState, useEffect } from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../logo.png'
import { Link } from 'react-router-dom';

  export function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

function updateName(event) {
  setUsername(event.target.value);
}
function updateEmail(event) {
  setEmail(event.target.value);
}
function updatePassword(event) {
  setPassword(event.target.value);
}
function registerUser(e) {
  const minUsernameLength = 3;
  const maxUsernameLength = 20;
  const minPasswordLength = 6;
  const maxPasswordLength = 100;
  const forbiddenSymbols = ['<', '>', '(', ')', '[', ']', ',', ';', ':', '\\', '"', '!', '#', '$', '%', '^', '&', '*','{', '}'];
  e.preventDefault();

  const newErrors = [];
  if (username.length < minUsernameLength || username.length > maxUsernameLength) {
      newErrors.push('klaida: username...');
  }
  
  
  if (!email){
    console.log('nepateiktas email')
    newErrors.push("nenurodytas email");
  } else if(email.indexOf('@')<2||email.indexOf('..')!==-1){
    newErrors.push('blogai nurodytas email...')
  } else for (const symbol of forbiddenSymbols){
            if(email.includes(symbol)){
              newErrors.push('Panaudoti neleistini symboliai')
              console.log("EWWW 404")
            }
  }


  if (password.length < minPasswordLength || password.length > maxPasswordLength) {
      newErrors.push('klaida: password...');
  } else if (password === email || password === username){
      newErrors.push('Slaptažodis negali sutapti su el. paštu arba username')
  } else for (const symbol of forbiddenSymbols){
    if(password.includes(symbol)){
    newErrors.push('Panaudoti neleistini symboliai')
    console.log("EWWW 405")
  }
}
  

  setErrors(newErrors);
  if (!newErrors.length) {
      setUsers((prev) => [...prev, { username, email, password }]);
  }
}

    return (
    <form className={style.Home}>
                <img src={Logo} alt="Logo" className={style.logo} />
                <h1 className={style.heading}>Create your account</h1>
                <h1>Register ({users.length})</h1>
                <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                {errors.map(err => <p>{err}</p>)}
                </div>
                <div className={style.row}>
                <label htmlFor='name'>Name</label>
                <input onChange={updateName} value={username} id='name' type="text" required placeholder='Your name here' />
                </div>
                <div className={style.row}>
                <label htmlFor='email'>Email</label>
                <input onChange={updateEmail} value={email} id='email' type="text" required placeholder='****@***.***' />
                </div>
                <div className={style.row}>
                <label htmlFor='password'>Password</label>
                <input onChange={updatePassword} id='password' type="password" required placeholder='Your password here' />
                </div>
                <p onClick={registerUser} type='submit' className={btn.button}>Register!</p>
                <p className={style.or}>or</p>
                <Link to='/Login' className={btn.button} >Login</Link>
            </form>
  );
  };