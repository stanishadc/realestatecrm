import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  AccountName: "",  
};

const AccountType = () => {

// Data Table

const [data, setData] = useState([]);

const [user, setUser] = useState({});

const {AccountTypeId} = useParams();


useEffect(() => {
  axios.get(`http://localhost:5000/api/AccountType/${AccountTypeId}`)
  .then((response) => setUser({...response.data[0] }))
 }, [AccountTypeId]);

const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/AccountType");
    setData(response.data);
  };

useEffect(() => {
  loadData();
}, []);

// Delete Data

const deleteData = (AccountTypeId) => {
  if(window.confirm("Are you sure that you wanted to delete Data ?")) {
    axios.delete(`http://localhost:5000/api/delete/${AccountTypeId}`);
    toast.success("Data Deleted Successfully");
    setTimeout(() => loadData(), 500);
  }
}

// View Data 

  const ViewData = (AccountTypeId) => {
      axios.get(`http://localhost:5000/api/AccountType/${AccountTypeId}`)
      .then((response) => setUser({...response.data[0] }))
     };
  
// Edit Data

const [state, setState] = useState(initialState);

const { AccountName } = state;

const navigate = useNavigate();

const EditData = () => {}

useEffect(() => {
  axios.get(`http://localhost:5000/api/AccountType/${AccountTypeId}`)
  .then((resp) => setState({...resp.data[0]}));
}, [AccountTypeId]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!AccountName ) {
    toast.error("Please provide value in each input field");
  }else {
    if (!AccountTypeId) {
      axios.post("http://localhost:5000/api/post/", {
        AccountName
    }).then(() => {
      setState({AccountName,});
   })
   .catch((err) => toast.error(err.response.data));
   toast.success("Added Successfully")
    } 
    else {
    axios.put(`http://localhost:5000/api/update/${AccountTypeId}`, {
     AccountName    
    }).then(() => {
      setState({ AccountName: ""});
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

  return(
    <div>
       <div className = "container mt-2">
       <div className = 'box row-sm-4'>
        <form className = 'row p-4 ml-3' onSubmit={handleSubmit}> 
          <h3 className='heading mb-4 text-center'>ACCOUNT TYPE</h3>
               
             <div className='row-sm-4 p-3 ml-3'>
                 
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="text" class="form-control mb-4" id = "AccountName" name="AccountName" value={AccountName || ""} onChange = {handleInputChange}  required="required"/>
                   <span>AccountName</span>
                </div>  
                </div>
                <button type="submit" className='submit' value = {AccountTypeId ? "Update" : "Add"}>Insert Record</button>
              
             </form>
      </div>   
    </div>
    <div class="col-sm-8" style ={{backgroundColor:"skyblue", width:"100%"}}>
    <div class="input-group mb-4 mt-3">
    </div>  
    <table class="table table-hover  table-striped table-bordered ml-4 ">
        <thead>
        <tr style={{backgroundColor:"#1d2b3a",color:"#00dfc4", textAlign:"center"}}>
            <th>Account Type ID</th>
            <th>Account Name</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody style={{textAlign:"center", fontFamily:"unset", fontWeight:"700", fontSize:"20px"}}>
        {data.map((item,index)=>{
            return(
              <tr key = {item.AccountTypeId}>
                <td>{item.AccountTypeId}</td>
                <td>{item.AccountName}</td>
                <td>
                  <div className = "buttons">
             
                  <button className = "btn btn-edit" onClick={() => EditData(item.AccountTypeId)}>Edit</button>
                  <button type="button" className ="btn btn-view" onClick={() => ViewData(item.AccountTypeId)} data-toggle="modal" data-target="#exampleModal">
                           View
                  </button>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.AccountTypeId)}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
    </table>
  </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{fontSize:"20px", backgroundColor: "#1d2b3a"}} >
        <h1 className ="card-header" style={{fontSize:"20px", backgroundColor: "#1d2b3a"}} id="exampleModalLabel">AccountType ID<span>{user.CommissionEntryId}</span></h1>
        <button type="button" className ="btn-close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div className ="modal-body">
      <div style={{marginTop: "15px"}}>
          <strong>Account Name  : <span>{user.AccountName}</span></strong>
    </div>
      </div>
      <div class="modal-footer" style={{backgroundColor: "#00dfc4"}} >
      <button type="button" class="btn btn-danger" style={{fontSize:"25px"}}  data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}
 
export default AccountType;