import { useState } from 'react';
import style from  './App.module.css';

function App() {
    const [name, setName] = useState('');;
    const [surname, setSurname]= useState('');
    function updateName(event) {
        setName(event.target.value);
    }
    function updateSurname(event) {
        setSurname(event.target.value);
    }
    return(
        <div className={style.app}>
            <form className={style.form}>
                <div className={style.row}>
                <label htmlFor='name'>Name</label>
                <input onChange={updateName} value={name} id='name' type="text" required placeholder='Your name here' />
                </div>
                <div className={style.row}>
                <label htmlFor='surname'>Surame</label>
                <input onChange={updateSurname} id='surname' type="text" required placeholder='Your surname here' />
                </div>
                <div className={style.row}>
                <button type='submit'>Create</button>
                </div>
            </form>'
            <div className={style.preview}>"{`${name} ${surname}`.trim() }"</div>
        </div>
    )
    
}
export default App;