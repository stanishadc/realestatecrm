import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  landId: 0,
  landname: "",
  dateofpurchase: "",
  landcost: "",
};
export default function Lands(props) {
  const [landList, setLandList] = useState([]);
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
    temp.landname = values.landname === "" ? false : true;
    temp.dateofpurchase = values.dateofpurchase === "" ? false : true;
    temp.landcost = values.landcost === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("landId", values.landId);
      formData.append("landname", values.landname);
      formData.append("dateofpurchase", values.dateofpurchase);
      formData.append("landcost", values.landcost);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Lands"
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
    if (formData.get("landId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Lands Added");
          resetForm();
          refreshlandList();
        });
    } else {
      applicationAPI()
        .update(formData.get("landId"), formData)
        .then((res) => {
          Alert("Lands Details Updated");
          resetForm();
          refreshlandList();
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
          Alert("Lands Type Deleted Succesfully");
          refreshlandList();
        })
        .catch((err) => Alert("Lands Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshlandList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setLandList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshlandList();
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
              Dashboard <i className="fa fa-angle-right" />  Lands Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Lands Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-3 col-12">
                      <input
                        className={"form-control" + applyErrorClass("landname")}
                        name="landname"
                        type="text"
                        value={values.landname}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name">LandName</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("dateofpurchase")}
                        name="dateofpurchase"
                        type="text"
                        value={values.dateofpurchase}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="dateofpurchase">DateOfPurchase</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("landcost")}
                        name="landcost"
                        type="text"
                        value={values.landcost}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="landcost">LandCost</label>
                    </div>
                    <div className="col-sm-3">
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
              id="landList"
            >
              <thead>
                <tr>
                  <th>LandName</th>
                  <th>DateOfPurchase</th>
                  <th>LandCost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {landList.map((lan) => (
                  <tr key={lan.landId}>
                    <td>{lan.landname}</td>
                    <td>{lan.dateofpurchase}</td>
                    <td>{lan.landCost}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(lan);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(lan.landId))
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