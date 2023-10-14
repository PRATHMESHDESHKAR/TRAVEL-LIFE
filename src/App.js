import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom';
import HOME from './data/HOME';
import ABOUT from './data/ABOUT';
import SERVICES from './data/SERVICES';
import CONTACT from './data/CONTACT';
import Navbar from './components/Navbar';
import SIGNUP from './data/SIGNUP';


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<HOME />}/>
        <Route path="/ABOUT" element={<ABOUT />}/>
        <Route path="/SERVICES" element={<SERVICES />}/>
        <Route path="/CONTACT" element={<CONTACT />}/>
        <Route path ="/SIGNUP" element={<SIGNUP />}/>
      </Routes>
      
      <Navbar />
      
    </div>
  );
}

export default App;
