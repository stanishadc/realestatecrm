import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountTypeHome = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5001/api/get/AccountType");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (AccountTypeId) => {
    if(window.confirm("Are you sure that you wanted to delete Data ?")) {
      axios.delete(`http://localhost:5001/api/delete/${AccountTypeId}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>AccountTypeId</th>
            <th style = {{textAlign: "center"}}>AccountName</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.AccountTypeId}>
                <td>{item.AccountTypeId}</td>
                <td>{item.AccountName}</td>
                <td>
                  <Link to = {`/update/${item.AccountTypeId}`}>
                  <button className = "btn btn-edit">Edit</button>
                  </Link>
                  <Link to = {`/view/${item.AccountTypeId}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.AccountTypeId)}>Delete</button>
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

export default AccountTypeHome