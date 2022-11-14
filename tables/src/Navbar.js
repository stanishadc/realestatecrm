import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">REAL ESTATE DATABASE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/AccountType">AccountType</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CommisssionEntry">CommissionEntry</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Commisssions">Commissions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Customer">Customer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CustomerDocuments">CustomerDocuments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Designations">Designations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dummy">Dummy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/EmployeeDocuments">EmployeeDocuments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Employees">Employees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LandDocuments">LandDocuments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Lands">Lands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Passbook">Passbook</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PassbookDocuments">PassbookDocuments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Payments">Payments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PlotDocuments">PlotDocuments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Plots">Plots</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Roles">Roles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;