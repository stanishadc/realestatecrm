import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const LoginHome = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5001/api/get/Login");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (LoginId) => {
    if(window.confirm("Are you sure that you wanted to delete Data ?")) {
      axios.delete(`http://localhost:5001/api/delete/${LoginId}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>LoginId</th>
            <th style = {{textAlign: "center"}}>Status</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.LoginId}>
                <td>{item.LoginId}</td>
                <td>{item.Status}</td>
                <td>
                  <Link to = {`/update/${item.LoginId}`}>
                  <button className = "btn btn-edit">Edit</button>
                  </Link>
                  <Link to = {`/view/${item.LoginId}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.LoginId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to = "/addData"> 
      <button className="btn btn-add">Add Data</button>
      </Link>
    </div>
  );
};

export default LoginHome;