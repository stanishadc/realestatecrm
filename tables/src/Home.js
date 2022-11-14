import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div>
        <center>
        <h1 style={{color:"Green"}}>Welcome To Home Page </h1>
        </center>
        <ul>                                                                                                                                               
        <Link to='/'></Link><br/>
        <Link to='/accounttype' className="Link"><li>AccountType</li></Link><br/>
        <Link to='/commissionentry' className="Link"><li>CommissionEntry</li></Link><br/>
        <Link to='/login' className="Link"><li>Login</li></Link><br/>
        <Link to='/passbook' className="Link"><li>Passbook</li></Link><br/>
        <Link to='/passbookdocuments' className="Link"><li>PassbookDocuments</li></Link><br/>
        <Link to='/payments' className="Link"><li>Payments</li></Link><br/>
        <Link to='/plotpayments' className="Link"><li>PlotPayments</li></Link><br/>
        <Link to='/plots' className="Link"><li>Plots</li></Link><br/>
        <Link to='/projects' className="Link"><li>Projects</li></Link><br/>
        <Link to='/roles' className="Link"><li>Roles</li></Link><br/>
        <Link to='/users' className="Link"><li>Users</li></Link><br/>
        </ul>
    </div>
  )
}

export default Home;