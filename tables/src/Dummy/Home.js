import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  dummyId: 0,
  name: "",
  plots:"",
  status:"",
};
export default function Dummy(props) {
  const [dummyList, setDummyList] = useState([]);
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
    temp.plots = values.plots === "" ? false : true;
    temp.status = values.status === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("dummyId", values.dummyId);
      formData.append("name", values.name);
      formData.append("plots", values.plots);
      formData.append("status", values.status);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Dummy"
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
    if (formData.get("dummyId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Dummy Added");
          resetForm();
          refreshDummyList();
        });
    } else {
      applicationAPI()
        .update(formData.get("dummyId"), formData)
        .then((res) => {
          Alert("Dummy Details Updated");
          resetForm();
          refreshDummyList();
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
          Alert("Dummy Type Deleted Succesfully");
          refreshDummyList();
        })
        .catch((err) => Alert("Dummy Type Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshDummyList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setDummyList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshDummyList();
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
              Dashboard <i className="fa fa-angle-right" /> Dummy Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Dummy Details</h6>
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
                        className={"form-control" + applyErrorClass("plots")}
                        name="plots"
                        type="text"
                        value={values.plots}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="plots">Plots</label>
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
              id="dummyList"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Plots</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dummyList.map((dum) => (
                  <tr key={dum.dummyId}>
                    <td>{dum.name}</td>
                    <td>{dum.plots}</td>
                    <td>{dum.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(dum);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(dum.dummyId))
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