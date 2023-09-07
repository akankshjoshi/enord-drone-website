import React from 'react';
import './App.css';
//import Navbar from './navbar/navbar';
import Loginform from './loginform/loginform';
import Landingpage from './landingpage/landingpage';
import Productsection from './productsection/productsection';
import Aboutus from './aboutus/aboutus';
import {Route,Routes} from 'react-router-dom';
import Signup from './signup/signup';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Landingpage />}/>
        <Route path='productsection' exact element={<Productsection/>}/>
        <Route path='loginform' exact element={<Loginform/>}/>
        <Route path='signup' exact element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
