import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';

import AccountType from './AccountType/Home';
import CommissionEntry from './CommissionEntry/Home';
import Commissions from './Commissions/Home';
import Customer from './Customer/Home';
import CustomerDocuments from './CustomerDocuments/Home';
import Designations from './Designations/Home';

/*import Dummy from './RealEstate/Dummy';
import EmployeeDocuments from './RealEstate/EmployeeDocuments';
import Employees from './Employees';
import LandDocuments from './LandDocuments';
import Lands from './Lands';
import Login from './Login';
import Passbook from './Passbook';
import PassbookDocuments from './PassbookDocuments';
import Payments from './Payments';
import PlotPayments from './PlotPayments';
import Plots from './Plots';
import Projects from './Projects';
import Roles from './Roles';
import Users from './Users';*/


function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/accounttype' element={<AccountType/>}/>
          <Route path='/commissionentry' element={<CommissionEntry/>}/>
          <Route path='/commissions' element={<Commissions/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/customerdocuments' element={<CustomerDocuments/>}/>
          <Route path='/Designations' element={<Designations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App