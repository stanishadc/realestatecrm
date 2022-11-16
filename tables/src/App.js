import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from "./Navbar";
import Home from "./Home"

import AccountTypeHome from "./AccountType/Home";
import AccountTypeEdit from './AccountType/Edit';
import AccountTypeView from './AccountType/View';

import CommissionEntryHome from "./CommissionEntry/Home";
import CommissionsHome from "./Commissions/Home";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
        <ToastContainer position="top-center"/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/AccountType" element ={<AccountTypeHome/>}/>
        <Route path = "/addData" element = {<AccountTypeEdit/>}/>
        <Route path = "/update/:AccountType" element = {<AccountTypeEdit/>}/>
        <Route path = "/view/:AccountType" element = {<AccountTypeView/>}/>
        <Route path = "CommissionEntry" element = {<CommissionEntryHome/>}/>
        <Route path = "Commissions" element = {<CommissionsHome/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

