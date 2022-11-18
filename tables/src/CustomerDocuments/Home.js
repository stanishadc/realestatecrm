import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  customerDocumentId: 0,
  documentName: "",
  customerId: "",
};
export default function CustomerDocuments(props) {
  const [customerDocumentList, setCustomerDocumentList] = useState([]);
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
    temp.documentName = values.documentName === "" ? false : true;
    temp.customerId = values.customerId === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("customerDocumentId", values.customerDocumentId);
      formData.append("documentName", values.documentName);
      formData.append("customerId", values.customerId);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/CustomerDocuments"
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
    if (formData.get("customerDocumentId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New CustomerDocuments Added");
          resetForm();
          refreshCustomerDocumentList();
        });
    } else {
      applicationAPI()
        .update(formData.get("customerDocumentId"), formData)
        .then((res) => {
          Alert("CustomerDocuments Details Updated");
          resetForm();
          refreshCustomerDocumentList();
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
          Alert("CustomerDocuments Type Deleted Succesfully");
          refreshCustomerDocumentList();
        })
        .catch((err) => Alert("Roles Type Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshCustomerDocumentList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setCustomerDocumentList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshCustomerDocumentList();
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
              Dashboard <i className="fa fa-angle-right" /> CustomerDocuments Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">CustomerDocuments Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-4 col-12">
                      <input
                        className={"form-control" + applyErrorClass("documentName")}
                        name="documentName"
                        type="text"
                        value={values.documentName}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="documentName">DocumentName</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("customerId")}
                        name="customerId"
                        type="text"
                        value={values.customerId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="customerId">CustomerId</label>
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
              id="customerDocumentList"
            >
              <thead>
                <tr>
                  <th>DocumentName</th>
                  <th>CustomerId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customerDocumentList.map((cud) => (
                  <tr key={cud.customerDocumentId}>
                    <td>{cud.documentName}</td>
                    <td>{cud.customerId}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(cud);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(cud.customerDocumentId))
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