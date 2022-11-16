import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">RealEstate Database</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/AccountType">AccountType</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/CommissionEntry">CommissionEntry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Commissions">Commissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Customer">Customer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/CustomerDocuments">CustomerDocuments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Designations">Designations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Dummy">Dummy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/EmployeeDocuments">EmployeeDocuments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Employees">Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/LandDocuments">LandDocuments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Lands">Lands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Passbook">Passbook</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/PassbookDocuments">PassbookDocuments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Payments">Payments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/PlotPayments">PlotPayments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Plots">Plots</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Roles">Roles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Users">Users</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;