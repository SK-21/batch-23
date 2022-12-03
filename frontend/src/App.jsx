import logo from './logo.svg';
import './App.css';
import Users from './Users/Users';
import { useState } from 'react';
import Flexbox from './Flexbox/Flexbox';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from './Routing/Routing';
import MyNavBar from './MyNavbar';
import Signup from './Signup/Signup';
import Login from './Login/Login';

function App() {
  const [showUsers, setUserView] = useState(true);


  // have state for showUsers 
  const name = "Nikhil";
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/' element={
            <div className="App">
              <div>
                <button onClick={e => setUserView(!showUsers)}>{showUsers ? 'Hide component' : 'Show Component'} </button>
              </div>
              {showUsers ? <Users /> : null}
            </div>
          } />
          <Route path='/FLEX' element={<Flexbox />} />
          <Route path='/route/:id' element={<Routing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
