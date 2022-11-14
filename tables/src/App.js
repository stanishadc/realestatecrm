import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import AccountType from './AccountType/Home';
import CommissionEntry from './CommissionEntry/Home';
/*import CustomerDocuments from './RealEstate/CustomerDocuments';
import Designations from './RealEstate/Designations';
import Customer from './RealEstate/Customer';
import CustomerDocuments from './RealEstate/CustomerDocuments';
import Designations from './RealEstate/Designations';
import Dummy from './RealEstate/Dummy';
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

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App