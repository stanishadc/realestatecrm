import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import AccountType from './AccountType/Home';
import Customer from './Customer/Home';
import CustomerDocuments from './CustomerDocuments/Home';
import Designations from './Designations/Home';
import Dummy from './Dummy/Home';
import EmployeeDocuments from './EmployeeDocuments/Home';
import LandDocuments from './LandDocuments/Home';
import PassbookDocuments from './PassbookDocuments/Home';
import Lands from './Lands/Home';
import Login from './Login/Home';
import Plots from './Plots/Home';
import Projects from './Projects/Home';
import Roles from './Roles/Home';
import Users from './Users/Home';

function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/accounttype' element={<AccountType/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/customerdocuments' element={<CustomerDocuments/>}/>
          <Route path='/designations' element={<Designations/>}/>
          <Route path='/dummy' element={<Dummy/>}/>
          <Route path='/employeedocuments' element={<EmployeeDocuments/>}/>
          <Route path='/landdocuments' element={<LandDocuments/>}/>
          <Route path='/passbookdocuments' element={<PassbookDocuments/>}/>
          <Route path='/lands' element={<Lands/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/plots' element={<Plots/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/roles' element={<Roles/>}/>
          <Route path='/users' element={<Users/>}/>
          


        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App