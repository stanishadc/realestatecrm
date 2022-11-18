import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  employeeId: 0,
  employeeNo:"",
  name: "",
  designationId: "",
  dateOfJoin: new Date().toLocaleString(),
  dateOfLeaving: new Date().toLocaleString(),
  gender:"",
  mobile:"",
  email:"",
  alternateMobile:"",
  address:"",
  status:"",
  createdDate: new Date().toLocaleString(),
  updatedDate: new Date().toLocaleString(),
  parentEmpId:"",

};
export default function Employees(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recordForEdit !== null) setValues(recordForEdit);
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validate = () => {
    let temp = {};
    temp.employeeNo = values.employeeNo === "" ? false : true;
    temp.name = values.name === "" ? false : true;
    temp.designationId = values.designationId === "" ? false : true;
    temp.dateOfJoin = values.dateOfJoin === "" ? false : true;
    temp.dateOfLeaving = values.dateOfLeaving === "" ? false : true;
    temp.gender = values.gender === "" ? false : true;
    temp.mobile = values.mobile === "" ? false : true;
    temp.email = values.email === "" ? false : true;
    temp.alternateMobile = values.alternateMobile === "" ? false : true;
    temp.address = values.address === "" ? false : true;
    temp.status = values.status === "" ? false : true;
    temp.createdDate = values.createdDate === "" ? false : true;
    temp.updatedDate = values.updatedDate === "" ? false : true;
    temp.parentEmpId = values.parentEmpId === "" ? false : true;

    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("employeeId", values.employeeId);
      formData.append("employeeNo", values.employeeNo);
      formData.append("name", values.name);
      formData.append("designationId", values.designationId);
      formData.append("dateOfJoin", values.dateOfJoin);
      formData.append("dateOfLeaving", values.dateOfLeaving);
      formData.append("gender", values.gender);
      formData.append("mobile", values.mobile);
      formData.append("email", values.email);
      formData.append("alternateMobile", values.alternateMobile);
      formData.append("address", values.address);
      formData.append("status", values.status);
      formData.append("createdDate", values.createdDate);
      formData.append("updatedDate", values.updatedDate);
      formData.append("parentEmpId", values.parentEmpId);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get//Employees"
  ) => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url + "insert", newRecord),
      update: (id, updateRecord) =>
        axios.put(url + "update/" + id, updateRecord),
      delete: (id) => axios.delete(url + "delete/" + id),
    };
  };
  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("employeeId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Employee Added");
          resetForm();
          refreshEmployeeList();
        });
    } else {
      applicationAPI()
        .update(formData.get("employeeId"), formData)
        .then((res) => {
          Alert("Employee Details Updated");
          resetForm();
          refreshEmployeeList();
        });
    }
  };
  const showEditDetails = (data) => {
    setRecordForEdit(data);
  };
  const onDelete = (e, id) => {
    if (window.confirm("Are you sure to delete this record?"))
      applicationAPI()
        .delete(id)
        .then((res) => {
          Alert("Employee Type Deleted Succesfully");
          refreshCustomerList();
        })
        .catch((err) => Alert("Employee Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshEmployeeList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setEmployeeList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshEmployeeList();
  }, []);
  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " form-control-danger" : "";
  return (
    <div className="container-fluid">
      
      <div className="row main-content">
        <div className="col-sm-3 col-xs-6 sidebar pl-0">
        
        </div>
        <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
          <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <span className="text-secondary">
              Dashboard <i className="fa fa-angle-right" />  Employee Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Employee Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-3 col-12">
                      <input
                        className={"form-control" + applyErrorClass("employeeNo")}
                        name="employeeNo"
                        type="text"
                        value={values.employeeNo}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="employeeNo">EmployeeNo</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("name")}
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("designationId")}
                        name="designationId"
                        type="text"
                        value={values.designationId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="designationId">designationId</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("dateOfJoin")}
                        name="dateOfJoin"
                        type="date"
                        value={values.dateOfJoin}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="dateOfJoin">DateOfJoin</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("dateOfLeaving")}
                        name="dateOfLeaving"
                        type="date"
                        value={values.dateOfLeaving}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="dateOfLeaving">DateOfLeaving</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("gender")}
                        name="gender"
                        type="text"
                        value={values.gender}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="gender">Gender</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("mobile")}
                        name="mobile"
                        type="text"
                        value={values.mobile}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("email")}
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("alternateMobile")}
                        name="alternateMobile"
                        type="text"
                        value={values.alternateMobile}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="alternateMobile">AlternateMobile</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("address")}
                        name="address"
                        type="text"
                        value={values.address}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("status")}
                        name="status"
                        type="text"
                        value={values.status}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="status">Status</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("createdDate")}
                        name="createdDate"
                        type="date"
                        value={values.createdDate}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="createdDate">CreatedDate</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("updatedDate")}
                        name="updatedDate"
                        type="date"
                        value={values.updatedDate}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="updatedDate">UpdatedDate</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("parentEmpId")}
                        name="parentEmpId"
                        type="text"
                        value={values.parentEmpId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="parentEmpId">parentEmpId</label>
                    </div>
                    
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-primary mr-3">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={resetForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="table-responsive product-list">
            <table
              className="table table-bordered table-striped mt-3"
              id="employeeList"
            >
              <thead>
                <tr>
                  <th>employeeNo</th>
                  <th>Name</th>
                  <th>Designations</th>
                  <th>DateOfJoin</th>
                  <th>DateOfLeaving</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>AlternateMobile</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>CreatedDate</th>
                  <th>UpdatedDate</th>
                  <th>parentEmpId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((emp) => (
                  <tr key={emp.employeeId}>
                    <td>{emp.employeeNo}</td>
                    <td>{emp.name}</td>
                    <td>{emp.designationId}</td>
                    <td>{emp.dateOfJoin}</td>
                    <td>{emp.dateOfLeaving}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.email}</td>
                    <td>{emp.alternateMobile}</td>
                    <td>{emp.address}</td>
                    <td>{emp.status}</td>
                    <td>{emp.createdDate}</td>
                    <td>{emp.updatedDate}</td>
                    <td>{emp.parentEmpId}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(emp);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(emp.employeeId))
                        }
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Link to='/'>Home</Link>
    </div>
  );
}