import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountType = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get/EmployeeDocuments");
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
            <th style = {{textAlign: "center"}}>EmployeeDocumentId</th>
            <th style = {{textAlign: "center"}}>DocumentName</th>
            <th style = {{textAlign: "center"}}>EmployeeId</th>
            <th style = {{textAlign: "center"}}>DocumentUrl</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.EmployeeDocumentId}</td>
                <td>{item.DocumentName}</td>
                <td>{item.EmployeeId}</td>
                <td>{item.DocumentUrl}</td>
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
      <Link to='/employeedocuments'>EmployeeDocuments</Link><br/>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default AccountType;
