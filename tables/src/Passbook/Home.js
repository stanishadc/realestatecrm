import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const Passbook = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get");
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
            <th style = {{textAlign: "center"}}>PassbookId</th>
            <th style = {{textAlign: "center"}}>PlotId</th>
            <th style = {{textAlign: "center"}}>PassbookNo</th>
            <th style = {{textAlign: "center"}}>DateOfJoin</th>
            <th style = {{textAlign: "center"}}>PaymentLastDate</th>
            <th style = {{textAlign: "center"}}>Nominee</th>
            <th style = {{textAlign: "center"}}>TotalAmount</th>
            <th style = {{textAlign: "center"}}>Commission</th>
            <th style = {{textAlign: "center"}}>TDS</th>
            <th style = {{textAlign: "center"}}>Eligibility</th>
            <th style = {{textAlign: "center"}}>Adjustment</th>
            <th style = {{textAlign: "center"}}>FinalComission</th>
            <th style = {{textAlign: "center"}}>PendingAmount</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>UpdatedDate</th>
            <th style = {{textAlign: "center"}}>Name</th>
            <th style = {{textAlign: "center"}}>Mobile</th>
            <th style = {{textAlign: "center"}}>UserId</th>
            <th style = {{textAlign: "center"}}>PlotAmount</th>
            <th style = {{textAlign: "center"}}>Maintainance</th>
            <th style = {{textAlign: "center"}}>Address</th>
            <th style = {{textAlign: "center"}}>FacingCharges</th>
            <th style = {{textAlign: "center"}}>ProjectId</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.PassbookId}</td>
                <td>{item.PlotId}</td>
                <td>{item.PassbookNo}</td>
                <td>{item.DateOfJoin}</td>
                <td>{item.PaymentLastDate}</td>
                <td>{item.Nominee}</td>
                <td>{item.TotalAmount}</td>
                <td>{item.Commission}</td>
                <td>{item.TDS}</td>
                <td>{item.Eligibility}</td>
                <td>{item.Adjustment}</td>
                <td>{item.FinalCommission}</td>
                <td>{item.PendingAmount}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.Name}</td>
                <td>{item.Mobile}</td>
                <td>{item.UserId}</td>
                <td>{item.PlotAmount}</td>
                <td>{item.Maintainance}</td>
                <td>{item.Address}</td>
                <td>{item.FacingCharges}</td>
                <td>{item.ProjectId}</td>
                <td>
                  <Link to = {`/update/${item.id}`}>
                  <button className = "btn btn-edit">Edit</button>
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
      <Link to='/passbook'>Passbook</Link><br/>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Passbook;