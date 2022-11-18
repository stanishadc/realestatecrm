import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  plotId: 0,
  plotNo:"",
  projectId: "",
  status: "",
  facing: "",
  plotSize:"",
  amount:"",
  maintainanceCharges: "",
  facingCharges: "",

};
export default function Projects(props) {
  const [plotList, setPlotList] = useState([]);
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
    temp.plotNo = values.plotNo === "" ? false : true;
    temp.projectId = values.projectId === "" ? false : true;
    temp.status = values.status === "" ? false : true;
    temp.facing = values.facing === "" ? false : true;
    temp.plotSize = values.plotSize === "" ? false : true;
    temp.amount = values.amount === "" ? false : true;
    temp.maintainanceCharges = values.maintainanceCharges === "" ? false : true;
    temp.facingCharges = values.facingCharges === "" ? false : true;

    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("plotId", values.plotId);
      formData.append("PlotNo", values.plotNo);
      formData.append("ProjectId", values.projectId);
      formData.append("status", values.status);
      formData.append("facing", values.facing);
      formData.append("plotSize", values.plotSize);
      formData.append("amount", values.amount);
      formData.append("maintainanceCharges", values.maintainanceCharges);
      formData.append("facingCharges", values.facingCharges)
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Plots"
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
    if (formData.get("plotId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Plots Added");
          resetForm();
          refreshPlotsList();
        });
    } else {
      applicationAPI()
        .update(formData.get("plotId"), formData)
        .then((res) => {
          Alert("Plots Details Updated");
          resetForm();
          refreshPlotsList();
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
          Alert("Plots Type Deleted Succesfully");
          refreshPlotsList();
        })
        .catch((err) => Alert("Plots Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshPlotsList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setPlotList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshPlotsList();
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
              Dashboard <i className="fa fa-angle-right" />  Plots Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Plots Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-2 col-12">
                      <input
                        className={"form-control" + applyErrorClass("plotNo")}
                        name="plotNo"
                        type="text"
                        value={values.plotNo}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="plotNo">PlotNo</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("projectId")}
                        name="projectId"
                        type="text"
                        value={values.projectId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="projectId">ProjectId</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("status")}
                        name="status"
                        type="text"
                        value={values.status}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="status">Status</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("facing")}
                        name="facing"
                        type="text"
                        value={values.facing}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="facing">Facing</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("plotSize")}
                        name="plotSize"
                        type="text"
                        value={values.plotSize}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="plotSize">PlotSize</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("amount")}
                        name="amount"
                        type="text"
                        value={values.amount}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="amount">amount</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("maintainanceCharge")}
                        name="maintainanceCharge"
                        type="text"
                        value={values.maintainanceCharges}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="maintainanceCharge">MaintainanceCharge</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className={"form-control" + applyErrorClass("facingCharges")}
                        name="facingCharges"
                        type="text"
                        value={values.facingCharges}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="facingCharges">FacingCharges</label>
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
              id="plotList"
            >
              <thead>
                <tr>
                  <th>PlotNo</th>
                  <th>ProjectId</th>
                  <th>Status</th>
                  <th>Facing</th>
                  <th>PlotSize</th>
                  <th>Amount</th>
                  <th>MaintainanceCharge</th>
                  <th>FacingCharges</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {plotList.map((plo) => (
                  <tr key={plo.plotId}>
                    <td>{plo.plotNo}</td>
                    <td>{plo.projectId}</td>
                    <td>{plo.status}</td>
                    <td>{plo.facing}</td>
                    <td>{plo.plotSize}</td>
                    <td>{plo.amount}</td>
                    <td>{plo.maintainanceCharges}</td>
                    <td>{plo.facingCharges}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(plo);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(plo.plotId))
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