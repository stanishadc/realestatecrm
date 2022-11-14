import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const AccountType = () => {

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
            <th style = {{textAlign: "center"}}>PlotId</th>
            <th style = {{textAlign: "center"}}>PlotNo</th>
            <th style = {{textAlign: "center"}}>ProjectId</th>
            <th style = {{textAlign: "center"}}>Status</th>
            <th style = {{textAlign: "center"}}>Facing</th>
            <th style = {{textAlign: "center"}}>PlotSize</th>
            <th style = {{textAlign: "center"}}>Amount</th>
            <th style = {{textAlign: "center"}}>MaintainanceCharges</th>
            <th style = {{textAlign: "center"}}>FacingCharges</th>
            <th style = {{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
              <tr key = {item.id}>
                <td>{item.DummyId}</td>
                <td>{item.PlotId}</td>
                <td>{item.PlotNo}</td>
                <td>{item.ProjectId}</td>
                <td>{item.Status}</td>
                <td>{item.Facing}</td>
                <td>{item.PlotSize}</td>
                <td>{item.Amount}</td>
                <td>{item.MaintainanceCharges}</td>
                <td>{item.FacingCharges}</td>
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
    </div>
  );
};

export default AccountType;
