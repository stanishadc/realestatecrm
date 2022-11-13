import React from 'react';
import Navbar from './RealEstate/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AccountType from './RealEstate/AccountType';
import CommissionEntry from './RealEstate/CommissionEntry';
import Commissions from './RealEstate/Commissions';
/*import Customer from './RealEstate/Customer';
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


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>

        <Route path = "/AccountypeId" component = {AccountType}/>
        <Route path = "/CommissionEntry" component = {CommissionEntry}/>
        <Route path = "/Commissions" component = {Commissions}/>  

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;