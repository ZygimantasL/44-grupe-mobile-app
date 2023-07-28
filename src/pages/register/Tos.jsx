import React from 'react';
import btn from '../../components/button.module.css';
import style from '../../components/Base.module.css';
import Logo from '../../logo.png'
import { Link } from 'react-router-dom';

export function TOS() {

    return (
    <div className={style.Home}>
                <div className={style.row}>
             <h1 className={style.heading}>
               Terms of service 
             </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum veritatis id eos accusamus explicabo rerum labore aliquid, perspiciatis nam incidunt sequi.
                </p>
            <h2 className={style.heading2}>Second topic</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit quam quasi ipsum dicta?</p>
                </div>
            </div>
  );
  };