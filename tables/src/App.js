import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import AccountType from './AccountType/Home';
import Login from './Login/Home';
import Roles from './Roles/Home';
import Users from './Users/Home';
import Lands from './Lands/Home';

function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/accounttype' element={<AccountType/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/roles' element={<Roles/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/lands' element={<Lands/>}/>
          


        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App