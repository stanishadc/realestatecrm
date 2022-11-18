import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  designationId: 0,
  name: "",
  status:"",
  commission:"",
  parentId: "",
};
export default function Designations(props) {
  const [designationList, setDesignationList] = useState([]);
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
    temp.name = values.name === "" ? false : true;
    temp.status = values.status === "" ? false : true;
    temp.commission = values.commission === "" ? false : true;
    temp.parentId = values.parentId === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("designationId", values.designationId);
      formData.append("name", values.name);
      formData.append("status", values.status);
      formData.append("commission", values.commission);
      formData.append("parentId", values.parentId);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Designations"
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
    if (formData.get("designationId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Designations Added");
          resetForm();
          refreshDesignationsList();
        });
    } else {
      applicationAPI()
        .update(formData.get("designationId"), formData)
        .then((res) => {
          Alert("Designations Details Updated");
          resetForm();
          refreshDesignationsList();
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
          Alert("Designations Type Deleted Succesfully");
          refreshDesignationsList();
        })
        .catch((err) => Alert("Designations Type Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshDesignationsList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setDesignationList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshDesignationsList();
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
              Dashboard <i className="fa fa-angle-right" /> Designations Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Designations Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-4 col-12">
                      <input
                        className={"form-control" + applyErrorClass("name")}
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">Name</label>
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
                        className={"form-control" + applyErrorClass("commission")}
                        name="commission"
                        type="text"
                        value={values.commission}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="commission">Commission</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("parentId")}
                        name="parentId"
                        type="text"
                        value={values.parentId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="parentId">ParentId</label>
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
              id="designationList"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Commission</th>
                  <th>ParentId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {designationList.map((des) => (
                  <tr key={des.designationId}>
                    <td>{des.name}</td>
                    <td>{des.status}</td>
                    <td>{des.commission}</td>
                    <td>{des.parentId}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(des);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(des.designationId))
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