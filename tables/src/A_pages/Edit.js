import React, {useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Edit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  emp_name: "",
  department: "",
  city: "",
  salary: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { emp_name, department, city, salary } = state;

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${id}`)
    .then((resp) => setState({...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emp_name || !department || !city || !salary) {
      toast.error("Please provide value in each input field");
    }else {
      if (!id) {
        axios.post("http://localhost:5001/api/post", {
       emp_name,
       department,
       city,
       salary
      }).then(() => {
        setState({emp_name: "", department: "", city: "", salary: "",});
     })
     .catch((err) => toast.error(err.response.data));
     toast.success("Added Successfully")
      } 
      else {
        axios.put(`http://localhost:5001/api/update/${id}`, {
       emp_name,
       department,
       city,
       salary
      }).then(() => {
        setState({emp_name: "", department: "", city: "", salary: "",});
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
      <label htmlFor="emp_name">Employee Name</label>
      <input type = "text" id = "emp_name" name = "emp_name" placeholder="Enter Employee Name" value = {emp_name || ""} onChange = {handleInputChange} />

      <label htmlFor="department">Department</label>
      <input type = "text" id = "department" name = "department" placeholder="Enter Department Name" value = {department || ""} onChange = {handleInputChange} />
      
      <label htmlFor="city">City</label>
      <input type = "text" id = "city" name= "city" placeholder="Enter City Name" value = {city || ""} onChange = {handleInputChange} />

      <label htmlFor="salary">Salary</label>
      <input type = "number" id = "salary" name = "salary" placeholder="Enter Salary" value = {salary || ""} onChange = {handleInputChange} />

      <input className = "btn btn-save" type = "submit" value = {id ? "Update" : "Save"}/>
      <Link to = "/">
      <button className = "btn btn-close" value = "Close">Close</button>
      </Link>

     </form>  
    </div>
  );
};

export default AddEdit;
