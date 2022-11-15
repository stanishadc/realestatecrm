import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountType = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get/Lands");
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
            <th style = {{textAlign: "center"}}>LandId</th>
            <th style = {{textAlign: "center"}}>LandName</th>
            <th style = {{textAlign: "center"}}>DateOfPurchase</th>
            <th style = {{textAlign: "center"}}>LandCost</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.LandId}</td>
                <td>{item.LandName}</td>
                <td>{item.DateOfPurchase}</td>
                <td>{item.LandCost}</td>
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
      <Link to='/lands'>Lands</Link><br/>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default AccountType;
