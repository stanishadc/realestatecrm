import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  userId: 0,
  username: "",
  password: "",
  status: "",
  roleId:"",
};
export default function Users(props) {
  const [userList, setUserList] = useState([]);
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
    temp.username = values.username === "" ? false : true;
    temp.password = values.Password === "" ? false : true;
    temp.status = values.status === "" ? false : true;
    temp.roleId = values.roleId === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("username", values.username);
      formData.append("password", values.password);
      formData.append("status", values.status);
      formData.append("roleId", values.roleId);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Users"
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
    if (formData.get("userId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Users Added");
          resetForm();
          refreshUserList();
        });
    } else {
      applicationAPI()
        .update(formData.get("userId"), formData)
        .then((res) => {
          Alert("Users Details Updated");
          resetForm();
          refreshUserList();
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
          Alert("Users Type Deleted Succesfully");
          refreshUserList();
        })
        .catch((err) => Alert("Users Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshUserList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshUserList();
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
              Dashboard <i className="fa fa-angle-right" />  Users Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Users Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-4 col-12">
                      <input
                        className={"form-control" + applyErrorClass("username")}
                        name="username"
                        type="text"
                        value={values.username}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">UserName</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("password")}
                        name="password"
                        type="text"
                        value={values.password}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("status")}
                        name="status"
                        type="text"
                        value={values.status}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="status">Status</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("roleId")}
                        name="roleId"
                        type="number"
                        value={values.roleId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="roleId">RoleId</label>
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
              id="userList"
            >
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Password</th>
                  <th>Status</th>
                  <th>RoleId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((use) => (
                  <tr key={use.userId}>
                    <td>{use.username}</td>
                    <td>{use.password}</td>
                    <td>{use.status}</td>
                    <td>{use.roleId}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(use);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(use.userId))
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