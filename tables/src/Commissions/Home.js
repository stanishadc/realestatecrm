import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const CommissionsHome = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5001/api/get/Commissions");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (CommissionId) => {
    if(window.confirm("Are you sure that you wanted to delete Data ?")) {
      axios.delete(`http://localhost:5001/api/delete/${CommissionId}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>CommissionId</th>
            <th style = {{textAlign: "center"}}>ReceiptNo</th>
            <th style = {{textAlign: "center"}}>EmployeeId</th>
            <th style = {{textAlign: "center"}}>Commission</th>
            <th style = {{textAlign: "center"}}>Amount</th>
            <th style = {{textAlign: "center"}}>PassbookNo</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>UpdatedDate</th>
            <th style = {{textAlign: "center"}}>TDS</th>
            <th style = {{textAlign: "center"}}>Adjustment</th>
            <th style = {{textAlign: "center"}}>Eligibility</th>
            <th style = {{textAlign: "center"}}>Advance</th>
            <th style = {{textAlign: "center"}}>Status</th>
            <th style = {{textAlign: "center"}}>PaymentDate</th>
            <th style = {{textAlign: "center"}}>PaymentMethod</th>
            <th style = {{textAlign: "center"}}>PaymentDetails</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.CommissionId}>
                <td>{item.CommissionId}</td>
                <td>{item.ReceiptNo}</td>
                <td>{item.EmployeeId}</td>
                <td>{item.Commission}</td>
                <td>{item.Amount}</td>
                <td>{item.PassbookNo}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.TDS}</td>
                <td>{item.Adjustment}</td>
                <td>{item.Eligibility}</td>
                <td>{item.Advance}</td>
                <td>{item.Status}</td>
                <td>{item.PaymentDate}</td>
                <td>{item.PaymentMethod}</td>
                <td>{item.PaymentDetails}</td>
                <td>
                  <Link to = {`/update/${item.CommissionId}`}>
                  <button className = "btn btn-edit">Edit</button>
                  </Link>
                  <Link to = {`/view/${item.CommissionId}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.CommissionId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to = "/addData"> 
      <button className="add">Add Data</button>
      </Link>
      <div>
      <Link to = "/"> 
      <button className="home">Home</button>
      </Link>
      </div>
      
    </div>
  );
};

export default CommissionsHome