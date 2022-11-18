import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  projectId: 0,
  name: "",
  noofPlots: "",
  googleMapAddress: "",
  address:"",
  description:"",
  createdDate: new Date().toLocaleString(),
  updatedDate: new Date().toLocaleString(),
  status:"",

};
export default function Projects(props) {
  const [projectList, setProjectList] = useState([]);
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
    temp.noofPlots = values.noofPlots === "" ? false : true;
    temp.googleMapAddress = values.googleMapAddress === "" ? false : true;
    temp.address = values.address === "" ? false : true;
    temp.description = values.description === "" ? false : true;
    temp.createdDate = values.createdDate === "" ? false : true;
    temp.updatedDate = values.updatedDate === "" ? false : true;
    temp.status = values.status === "" ? false : true;

    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("projectId", values.projectId);
      formData.append("name", values.name);
      formData.append("googleMapAddress", values.googleMapAddress);
      formData.append("address", values.address);
      formData.append("description", values.description);
      formData.append("createdDate", values.createdDate);
      formData.append("updatedDate", values.updatedDate);
      formData.append("status", values.status);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Projects"
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
    if (formData.get("projectId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Projects Added");
          resetForm();
          refreshProjectsList();
        });
    } else {
      applicationAPI()
        .update(formData.get("projectId"), formData)
        .then((res) => {
          Alert("Projects Details Updated");
          resetForm();
          refreshProjectsList();
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
          Alert("Projects Type Deleted Succesfully");
          refreshProjectsList();
        })
        .catch((err) => Alert("Projects Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshProjectsList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshProjectsList();
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
              Dashboard <i className="fa fa-angle-right" />  Projects Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Projects Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-3 col-12">
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
                        className={"form-control" + applyErrorClass("noofPlots")}
                        name="noofPlots"
                        type="text"
                        value={values.noofPlots}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="noofPlots">NoofPlots</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("googleMapAddress")}
                        name="googleMapAddress"
                        type="text"
                        value={values.googleMapAddress}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="googleMapAddress">GoogleMapAddress</label>
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
                        className={"form-control" + applyErrorClass("description")}
                        name="description"
                        type="text"
                        value={values.description}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="description">Description</label>
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
                        className={"form-control" + applyErrorClass("status")}
                        name="status"
                        type="text"
                        value={values.status}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="status">Status</label>
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
              id="projectList"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>NoofPlots</th>
                  <th>GoogleMapAddress</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>CreatedDate</th>
                  <th>UpdatedDate</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projectList.map((pro) => (
                  <tr key={pro.projectId}>
                    <td>{pro.name}</td>
                    <td>{pro.noofPlots}</td>
                    <td>{pro.googleMapAddress}</td>
                    <td>{pro.address}</td>
                    <td>{pro.description}</td>
                    <td>{pro.createdDate}</td>
                    <td>{pro.updatedDate}</td>
                    <td>{pro.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(pro);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(pro.projectId))
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