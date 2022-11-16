import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const UserHome = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5001/api/get/Users");
      setData(response.data);
    };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = (UserId) => {
    if(window.confirm("Are you sure that you wanted to delete Data ?")) {
      axios.delete(`http://localhost:5001/api/delete/${UserId}`);
      toast.success("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
    <div style = {{marginTop: "55px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style = {{textAlign: "center"}}>UserId</th>
            <th style = {{textAlign: "center"}}>UserName</th>
            <th style = {{textAlign: "center"}}>Password</th>
            <th style = {{textAlign: "center"}}>Status</th>
            <th style = {{textAlign: "center"}}>RoleId</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.UserId}>
                <td>{item.UserId}</td>
                <td>{item.UserName}</td>
                <td>{item.Password}</td>
                <td>{item.Status}</td>
                <td>{item.RoleId}</td>
                <td>
                  <Link to = {`/update/${item.UserId}`}>
                  <button className = "btn btn-edit">Edit</button>
                  </Link>
                  <Link to = {`/view/${item.UserId}`}>
                  <button className = "btn btn-view">View</button>
                  </Link>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.UserId)}>Delete</button>
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

export default Home;