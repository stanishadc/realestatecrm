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
import Login from './Login/Home';
import Passbook from './Passbook/Home';
import PassbookDocuments from './PassbookDocuments/Home';
import Payments from './Payments/Home';
import PlotPayments from './PlotPayments/Home';
import Plots from './Plots/Home';
import Projects from './Projects/Home';
import Roles from './Roles/Home';
import Users from './Users/Home';

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
          <Route path='/designations' element={<Designations/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/passbook' element={<Passbook/>}/>
          <Route path='/passbookdocuments' element={<PassbookDocuments/>}/>
          <Route path='/payments' element={<Payments/>}/>
          <Route path='/plotpayments' element={<PlotPayments/>}/>
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