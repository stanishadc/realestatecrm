import React, {useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  ReceiptNo: "", 
  EmployeeId: "",
  Commission:"",
  Amount:"",
  PassbookNo: "",
  CreatedDate: "",
  UpdatedDate: "",
  TDS: "",
  Adjustment: "",
  Eligibility: "",
  Advance: "",
  Status:"",
  PaymentDate: "",
  PaymentMethod: "",
  PaymentDetails: "",
};

const Commissions = () => {

// Data Table

const [data, setData] = useState([]);

const [user, setUser] = useState({});

const {CommissionId} = useParams();


useEffect(() => {
  axios.get(`http://localhost:5000/api/Commissions/${CommissionId}`)
  .then((response) => setUser({...response.data[0] }))
 }, [CommissionId]);

const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/Commissions");
    setData(response.data);
  };

useEffect(() => {
  loadData();
}, []);

// Delete Data

const deleteData = (CommissionId) => {
  if(window.confirm("Are you sure that you wanted to delete Data ?")) {
    axios.delete(`http://localhost:5000/api/delete/${CommissionId}`);
    toast.success("Data Deleted Successfully");
    setTimeout(() => loadData(), 500);
  }
}

// View Data 

  const ViewData = (CommissionId) => {
      axios.get(`http://localhost:5000/api/Commissionentry/${CommissionId}`)
      .then((response) => setUser({...response.data[0] }))
     };
  
// Edit Data

const [state, setState] = useState(initialState);

const { ReceiptNo , EmployeeId, Commission, Amount, PassbookNo, CreatedDate, UpdatedDate, TDS, Eligibility, Advance, Status, PaymentDate, PaymentMethod, PaymentDetails } = state;

const navigate = useNavigate();

const EditData = () => {}

useEffect(() => {
  axios.get(`http://localhost:5000/api/Commissions/${CommissionId}`)
  .then((resp) => setState({...resp.data[0]}));
}, [CommissionId]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!ReceiptNo || !EmployeeId || !Commission || !Amount || !PassbookNo || !CreatedDate || !UpdatedDate || !TDS || !Eligibility || !Advance || !Status || !PaymentDate || !PaymentMethod || !PaymentDetails) {
    toast.error("Please provide value in each input field");
  }else {
    if (!CommissionId) {
      axios.post("http://localhost:5000/api/post/", {
        ReceiptNo , EmployeeId, Commission, Amount, PassbookNo, CreatedDate, 
        UpdatedDate, TDS, Eligibility, Advance, Status, PaymentDate, PaymentMethod, PaymentDetails
    }).then(() => {
      setState({ReceiptNo: "" , EmployeeId: "", Commission: "", Amount: "", PassbookNo: "", CreatedDate: "", UpdatedDate: "", TDS: "", Eligibility: "", Advance: "", Status: "", PaymentDate: "", PaymentMethod: "", PaymentDetails: "",});
   })
   .catch((err) => toast.error(err.response.data));
   toast.success("Added Successfully")
    } 
    else {
    axios.put(`http://localhost:5000/api/update/${CommissionId}`, {
        ReceiptNo , EmployeeId, Commission, Amount, PassbookNo, CreatedDate, UpdatedDate, TDS,
         Eligibility, Advance, Status, PaymentDate, PaymentMethod, PaymentDetails   
    }).then(() => {
      setState({ReceiptNo: "" , EmployeeId: "", Commission: "", Amount: "", PassbookNo: "", CreatedDate: "", UpdatedDate: "", TDS: "", Eligibility: "", Advance: "", Status: "", PaymentDate: "", PaymentMethod: "", PaymentDetails: ""});
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
          <h3 className='heading mb-4 text-center'>COMMISSIONS</h3>
               
             <div className='row-sm-4 p-3 ml-3'>
                 
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "ReceiptNo" name="ReceiptNo" value={ReceiptNo || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Receipt No</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "EmployeeId" name="EmployeeId" value={EmployeeId || ""} onChange = {handleInputChange}  required="required"/>
                   <span>EmployeeId</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Commission" name="Commission" value={Commission || ""} onChange = {handleInputChange} required="required"/>
                   <span>Commission</span>
                </div>

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "Amount" name="Amount" value={Amount || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Amount</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control  mb-4" id = "PassbookNo" name="PassbookNo" value={PassbookNo || ""} onChange = {handleInputChange}  required="required"/>
                   <span>PassbookNo</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "CreatedDate" name="CreatedDate" value={CreatedDate || ""} onChange = {handleInputChange}  required="required"/>
                   <span>CreatedDate</span>
                </div>  
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "UpdatedDate" name="UpdatedDate" value={UpdatedDate || ""} onChange = {handleInputChange}  required="required"/>
                   <span>UpdatedDate</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id ="TDS" name="TDS" value = {TDS || ""} onChange = {handleInputChange} required="required"/>
                   <span>TDS</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id ="Eligibility" name="Eligibility" value={Eligibility || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Eligibility</span>
                </div>  
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "Advance" name="Advance" value = {Advance || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Advance</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="number" class="form-control mb-4" id = "Status" name="Status" value={Status || ""} onChange = {handleInputChange}  required="required"/>
                   <span>Status</span>
                </div> 
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="date" class="form-control  mb-4" id = "PaymentDate" name="PaymentDate" value={PaymentDate || ""} onChange = {handleInputChange}  required="required"/>
                   <span>PaymentDate</span>
                </div>  

                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="text" class="form-control  mb-4" id = "PaymentMethod" name="PaymentMethod" value={PaymentMethod || ""} onChange = {handleInputChange}  required="required"/>
                   <span>PaymentMethod</span>
                </div> 
                
                <div className='inputbox form-group' style={{float:"left"}}>
                   <input type="text" class="form-control  mb-4" id = "PaymentDetails" name="PaymentDetails" value={PaymentDetails || ""} onChange = {handleInputChange}  required="required"/>
                   <span>PaymentDetails</span>
                </div>  
                </div>
                <button type="submit" className='submit' value = {CommissionId ? "Update" : "Add"}>Insert Record</button>
              
             </form>
      </div>   
    </div>
    <div class="col-sm-8" style ={{backgroundColor:"skyblue", width:"100%"}}>
    <div class="input-group mb-4 mt-3">
    </div>  
    <table class="table table-hover  table-striped table-bordered ml-4 ">
        <thead>
        <tr style={{backgroundColor:"#1d2b3a",color:"#00dfc4", textAlign:"center"}}>
            <th>Commission ID</th>
            <th>Receipt No</th>
            <th>Employee ID</th>
            <th>Commission</th>
            <th>Amount</th>
            <th>Passbook No</th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>TDS</th>
            <th>Adjustment</th>
            <th>Eligibility</th>
            <th>Advance</th>
            <th>Status</th>
            <th>PaymentDate</th>
            <th>PaymentMethod</th>
            <th>PaymentDetails</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody style={{textAlign:"center", fontFamily:"unset", fontWeight:"700", fontSize:"20px"}}>
        {data.map((item,index)=>{
            return(
              <tr key = {item.CommissionId}>
                <td>{item.CommissionId}</td>
                <td>{item.ReceiptNo}</td>
                <td>{item.EmployeeId}</td>
                <td>{item.Commission}</td>
                <td>{item.Amount}</td>
                <td>{item.PassbookNo}</td>
                <td>{item.CreatedDate}</td>
                <td>{item.UpdatedDate}</td>
                <td>{item.TDS}</td>
                <td>{item.Eligibility}</td>
                <td>{item.Advance}</td>
                <td>{item.Status}</td>
                <td>{item.PaymentDate}</td>
                <td>{item.PaymentMethod}</td>
                <td>{item.PaymentDetails}</td>
                <td>
                  <div className = "buttons">
             
                  <button className = "btn btn-edit" onClick={() => EditData(item.CommissionId)}>Edit</button>
                  <button type="button" className ="btn btn-view" onClick={() => ViewData(item.CommissionId)} data-toggle="modal" data-target="#exampleModal">
                           View
                  </button>
                  <button className = "btn btn-delete" onClick={() => deleteData(item.CommissionId)}>Delete</button>
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
        <h1 className ="card-header" style={{fontSize:"20px", backgroundColor: "#1d2b3a"}} id="exampleModalLabel">Commission ID<span>{user.CommissionEntryId}</span></h1>
        <button type="button" className ="btn-close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div className ="modal-body">
      <div style={{marginTop: "15px"}}>
    
          <strong>ReceiptNo  : <span>{user.ReceiptNo}</span></strong>
          <br/>

          <strong>EmployeeId : <span>{user.EmployeeId}</span></strong>
          <br/>

          <strong>Commission : <span>{user.Commission}</span></strong>
          <br/>

          <strong>CreatedDate : <span>{user.CreatedDate}</span> </strong>
          <br/>

          <strong>UpdatedDate : <span>{user.UpdatedDate}</span> </strong>
          <br/>

          <strong>     TDS    : <span>{user.TDS}</span></strong>
          <br/>

          <strong>  Adjustment       : <span>{user.Adjustment}</span></strong>
          <br/>

          <strong>Eligibility : <span>{user.Eligibility}</span></strong>
          <br/>

          <strong>    Advance        : <span>{user.Advance}</span></strong>
          <br/>

          <strong>    Status       : <span>{user.Status}</span></strong>
          <br/>

          <strong>PaymentDate : <span>{user.PaymentDate}</span> </strong>
          <br/>

          <strong>PaymentMethod  : <span>{user.PaymentMethod}</span></strong>
          <br/>

          <strong> PaymentDetails  : <span>{user.PaymentDetails}</span></strong>
          <br/> 

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
 
export default Commissions;