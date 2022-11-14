import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountType = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get/AccountType");
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
            <th style = {{textAlign: "center"}}>AccountTypeID</th>
            <th style = {{textAlign: "center"}}>AccountName</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.AccountTypeId}</td>
                <td>{item.AccountName}</td>
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
      <Link to='/accounttype'>AccountType</Link><br/>
      <Link to='/'>Home</Link>
      </div>
    </div>

  );
};

export default AccountType;