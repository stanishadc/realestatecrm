import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import NavbarHome from './Navbar';

import AccountType from './AccountType';
import CommissionEntry from './CommissionEntry';
import Commissions from './Commissions';
import Customer from './Customer';
import CustomerDocuments from './CustomerDocuments';
import Designations from './Designations';
import Dummy from './Dummy';
import EmployeeDocuments from './EmployeeDocuments';
import Employees from './Employees';
import LandDocuments from './LandDocuments';
import Lands from './Lands';
import Login from './Login';



function App() {
  return ( 
    <BrowserRouter>
    <NavbarHome/>
        <ToastContainer position="top-center"/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/AccountType" element = {<AccountType/>}/>
        <Route path = "/CommissionEntry" element = {<CommissionEntry/>}/>
        <Route path = "/Commissions" element = {<Commissions/>}/>
        <Route path = "/Customer" element = {<Customer/>}/>
        <Route path = "/CustomerDocuments" element = {<CustomerDocuments/>}/>
        <Route path = "/Designations" element = {<Designations/>}/>
        <Route path = "/Dummy" element = {<Dummy/>}/>
        <Route path = "/EmployeeDocuments" element = {<EmployeeDocuments/>}/>
        <Route path = "/Employees" element = {<Employees/>}/>
        <Route path = "/LandDocuments" element = {<LandDocuments/>}/>
        <Route path = "/Lands" element = {<Lands/>}/>
        <Route path = "/Login" element = {<Login/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

