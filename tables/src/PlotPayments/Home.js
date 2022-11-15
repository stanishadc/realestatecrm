import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const PlotPayments = () => {

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
            <th style = {{textAlign: "center"}}>ReceiptNo</th>
            <th style = {{textAlign: "center"}}>PassbookId</th>
            <th style = {{textAlign: "center"}}>AccountTypeId</th>
            <th style = {{textAlign: "center"}}>Amount</th>
            <th style = {{textAlign: "center"}}>PaymentDate</th>
            <th style = {{textAlign: "center"}}>Remarks</th>
            <th style = {{textAlign: "center"}}>PaymentMethod</th>
            <th style = {{textAlign: "center"}}>PaymentDetails</th>
            <th style = {{textAlign: "center"}}>UserId</th>
            <th style = {{textAlign: "center"}}>CreatedDate</th>
            <th style = {{textAlign: "center"}}>UpdatedDate</th>
            <th style = {{textAlign: "center"}}>OpeningBalance</th>
            <th style = {{textAlign: "center"}}>ClosingBalance</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.ReceiptNo}</td>
                <td>{item.PassbookId}</td>
                <td>{item.AccountTypeId}</td>
                <td>{item.Amount}</td>
                <td>{item.PaymentDate}</td>
                <td>{item.Remarks}</td>
                <td>{item.PaymentMethod}</td>
                <td>{item.PaymentDetails}</td>
                <td>{item.UserId}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.PaymentType}</td>
                <td>{item.OpeningBalance}</td>
                <td>{item.ClosingBalance}</td>
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
      <Link to='/plotpayments'>PlotPayments</Link><br/>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default PlotPayments;