import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const Commissions = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get/Commission");
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
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>CommissionID</th>
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
              <tr key = {item.id}>
                <td>{item.CommissionId}</td>
                <td>{item.ReceitNo}</td>
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
      <div style = {{textAlign:"center", width:"100%"}}>
      <Link to = "/addData"> 
      <button className="btn btn-add">Add Data</button>
      </Link>
      </div>    
      <div>
      <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Commissions;
