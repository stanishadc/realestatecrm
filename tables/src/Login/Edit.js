import React, {useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Edit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  Status: "",
};

const LoginEdit = () => {

  const [state, setState] = useState(initialState);

  const { Status}  = state;

  const navigate = useNavigate();

  const {LoginId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${LoginId}`)
    .then((resp) => setState({...resp.data[0] }));
  }, [LoginId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Status) {
      toast.error("Please provide value in each input field");
    }else {
      if (!LoginId) {
        axios.post("http://localhost:5001/api/post", {
       Status
      }).then(() => {
        setState({Status: "",});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Added Successfully")
      } 
      else {
        axios.put(`http://localhost:5001/api/update/${LoginId}`, {
       Status
      }).then(() => {
        setState({Status: ""});
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
      <label htmlFor="Status">Status</label>
      <input type = "text" id = "Status" name = "Status" placeholder="Enter Value" value = {Status || ""} onChange = {handleInputChange} />
      
      <input className = "btn btn-save" type = "submit" value = {LoginId ? "Update" : "Save"}/>
      <Link to = "/">
      <button className = "btn btn-close" value = "Close">Close</button>
      </Link>

     </form>  
    </div>
  );
};

export default LoginEdit;