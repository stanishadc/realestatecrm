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
        </ul>
    </div>
  )
}

export default Home;