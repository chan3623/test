import React, {useState, useEffect} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css'

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';  

import Register from './Register/Register'

import R095_reactThrottle from './R095_reactThrottle';

const App =()=> {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login'); //login, info
  const userData = {
    id : '1234',
    password: '1234',
    name : '박찬룡',
  }
  const navigate = useNavigate();
  const changeMode=(e)=>{
    e.preventDefault();
    setMode('info');
    navigate('/Throttle');
    console.log(mode);
    console.log(userData.name);
  }
  return (
    <div className="App">
        <HeaderAdmin userName={userData.name} name={name}/>
          <Routes>
            <Route path='/' element={<LoginForm userData={userData} changeMode={changeMode} setName={setName}></LoginForm>} />
            <Route path='/Throttle' element={<R095_reactThrottle name={name} navigate={navigate}></R095_reactThrottle>} />
            <Route path='/register_check' element={<Register name={name} navigate={navigate}></Register>} />

          </Routes>
        <Footer/>
        </div>
  );
}

export default App;