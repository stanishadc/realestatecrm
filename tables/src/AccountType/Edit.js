import React, {useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Edit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  AccountName: "",
};

const Edit = () => {

  const [state, setState] = useState(initialState);

  const { AccountName}  = state;

  const navigate = useNavigate();

  const {AccountTypeId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${AccountTypeId}`)
    .then((resp) => setState({...resp.data[0] }));
  }, [AccountTypeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!AccountName) {
      toast.error("Please provide value in each input field");
    }else {
      if (!AccountTypeId) {
        axios.post("http://localhost:5001/api/post", {
       AccountName
      }).then(() => {
        setState({AccountName: "",});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Added Successfully")
      } 
      else {
        axios.put(`http://localhost:5001/api/update/${AccountTypeId}`, {
       AccountName
      }).then(() => {
        setState({AccountName: ""});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Updated Successfully")
      }
     setTimeout(() => {
       navigate("/")
     }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name] : value});
  };

  return (
    <div style = {{marginTop: "100px"}}>
     <form style = {{
      margin : "auto",
      padding : "15px",
      maxWidth : "400px",
      alignContent : "center"
     }}
     onSubmit = {handleSubmit}
     >
      <label htmlFor="AccountName">AccountName</label>
      <input type = "text" id = "AccountName" name = "AccountName" placeholder="Enter Name" value = {AccountName || ""} onChange = {handleInputChange} />
      
      <input className = "btn btn-save" type = "submit" value = {AccountTypeId ? "Update" : "Save"}/>
      <Link to = "/">
      <button className = "btn btn-close" value = "Close">Close</button>
      </Link>

     </form>  
    </div>
  );
};

export default Edit;