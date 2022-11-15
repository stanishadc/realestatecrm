import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div>
        <center>
        <h1 style={{color:"Green"}}>Welcome To RealEstate</h1>
        </center>
        <ul>                                                                                                                                               
        <Link to='/'></Link><br/>
        <Link to='/accounttype' className="Link"><li>AccountType</li></Link><br/>
        <Link to='/commissionentry' className="Link"><li>CommissionEntry</li></Link><br/>
        <Link to='/commissions' className="Link"><li>Commissions</li></Link><br/>
        <Link to='/customer' className="Link"><li>Customer</li></Link><br/>
        <Link to='/customerdocuments' className="Link"><li>CustomerDocuments</li></Link><br/>
        <Link to='/designations' className="Link"><li>Designations</li></Link><br/>
        <Link to='/dummy' className="Link"><li>Dummy</li></Link><br/>
        <Link to='/employeedocuments' className="Link"><li>EmployeeDocuments</li></Link><br/>
        <Link to='/employees' className="Link"><li>Employees</li></Link><br/>
        <Link to='/landdocuments' className="Link"><li>LandDocuments</li></Link><br/>
        <Link to='/lands' className="Link"><li>Lands</li></Link><br/>
        <Link to='/login' className="Link"><li>Login</li></Link><br/>
        <Link to='/passbook' className="Link"><li>Passbook</li></Link><br/>
        <Link to='/passbookdocuments' className="Link"><li>PassbookDocuments</li></Link><br/>
        <Link to='/payments' className="Link"><li>Payments</li></Link><br/>
        <Link to='/plotpayments' className="Link"><li>Plotpayments</li></Link><br/>
        <Link to='/plots' className="Link"><li>Plots</li></Link><br/>
        <Link to='/projects' className="Link"><li>Projects</li></Link><br/>
        <Link to='/roles' className="Link"><li>Roles</li></Link><br/>
        <Link to='/users' className="Link"><li>Users</li></Link><br/>
        </ul>
    </div>
  )
}

export default Home;