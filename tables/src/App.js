import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import AccountType from './AccountType/Home';
import CommissionEntry from './CommissionEntry/Home';
import Login from './Login/Home';
import Passbook from './Passbook/Home';
import PassbookDocuments from './PassbookDocuments/Home';
import Payments from './Payments/Home';
import PlotPayments from './PlotPayments/Home';
import Plots from './Plots/Home';
import Projects from './Projects/Home';
import Roles from './Roles/Home';
import Users from './Users/Home';
/*import CustomerDocuments from './RealEstate/CustomerDocuments';
import Designations from './RealEstate/Designations';
import Customer from './RealEstate/Customer';
import CustomerDocuments from './RealEstate/CustomerDocuments';
import Designations from './RealEstate/Designations';
import Dummy from './RealEstate/Dummy';
import EmployeeDocuments from './RealEstate/EmployeeDocuments';
import Employees from './Employees';
import LandDocuments from './LandDocuments';
import Lands from './Lands';*/

 /*<Route path="/CommissionEntry" exact element={<CommissionEntry/>} />
          <Route path="/Commissions" exact element={<Commissions/>} />
          <Route path="/Customer" exact element={<Customer/>} />

          <Route path="/CustomerDocuments" element={<CustomerDocuments/>} />
          <Route path="/Designations" exact element={<Designations/>} />
          <Route path="/Dummy" exact element={<Dummy/>} />
          <Route path="/EmployeeDocuments" exact element={<EmployeeDocuments/>}/>*/


function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/accounttype' element={<AccountType/>}/>
          <Route path='/commissionentry' element={<CommissionEntry/>}/>
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