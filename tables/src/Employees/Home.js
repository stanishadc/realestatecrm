import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountType = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get/Employees");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (id) => {
    if(window.confirm("Are you sure that you wanted to delete Data")) {
      axios.delete(`http://localhost:5000/api/delete/${id}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <Link to = "/addData"> 
      <button className="btn btn-add">Add Data</button>
      </Link>
     
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>DummyID</th>
            <th style = {{textAlign: "center"}}>EmployeeId</th>
            <th style = {{textAlign: "center"}}>EmployeeNo</th>
            <th style = {{textAlign: "center"}}>Name</th>
            <th style = {{textAlign: "center"}}>DesginationId</th>
            <th style = {{textAlign: "center"}}>DateOfJoin</th>
            <th style = {{textAlign: "center"}}>DateOfLeaving</th>
            <th style = {{textAlign: "center"}}>Gender</th>
            <th style = {{textAlign: "center"}}>Mobile</th>
            <th style = {{textAlign: "center"}}>Email</th>
            <th style = {{textAlign: "center"}}>AlternateMobile</th>
            <th style = {{textAlign: "center"}}>Address</th>
            <th style = {{textAlign: "center"}}>Status</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>UpdatedDate</th>
            <th style = {{textAlign: "center"}}>ParentEmpId</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.EmployeeId}</td>
                <td>{item.EmployeeNo}</td>
                <td>{item.Name}</td>
                <td>{item.DesginationId}</td>
                <td>{item.DateOfJoin}</td>
                <td>{item.DateOfLeaving}</td>
                <td>{item.Gender}</td>
                <td>{item.Mobile}</td>
                <td>{item.Email}</td>
                <td>{item.AlternaeMobile}</td>
                <td>{item.Address}</td>
                <td>{item.Status}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.ParentEmpId}</td>

                <td>
                  <Link to = {`/update/${item.id}`}>
                  <button className = "btn btn-edit">Delete</button>
                  </Link>
                  <Link to = {`/view/${item.id}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to='/employees'>Employees</Link><br/>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default AccountType;
