import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  landDocumentId: 0,
  documentName: "",
  passbookId: "",
  documentUrl:"",
};
export default function LandDocuments(props) {
  const [landDocumentList, setLandDocumentList] = useState([]);
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
    temp.passbookId = values.passbookId === "" ? false : true;
    temp.documentUrl = values.documentUrl === "" ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("landDocumentId", values.landDocumentId);
      formData.append("documentName", values.documentName);
      formData.append("passbookId", values.passbookId);
      formData.append("documentUrl", values.documentUrl)
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/LandDocuments"
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
    if (formData.get("landDocumentId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New LandDocuments Added");
          resetForm();
          refreshLandDocumentList();
        });
    } else {
      applicationAPI()
        .update(formData.get("landDocumentId"), formData)
        .then((res) => {
          Alert("LandDocuments Details Updated");
          resetForm();
          refreshLandDocumentList();
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
          Alert("LandDocuments Type Deleted Succesfully");
          refreshLandDocumentList();
        })
        .catch((err) => Alert("LandDocuments Type Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshLandDocumentList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setLandDocumentList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshLandDocumentList();
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
              Dashboard <i className="fa fa-angle-right" /> LandDocuments Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">LandDocuments Details</h6>
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
                        className={"form-control" + applyErrorClass("passbookId")}
                        name="passbookId"
                        type="text"
                        value={values.passbookId}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="passbookId">PassbookId</label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        className={"form-control" + applyErrorClass("documentUrl")}
                        name="documentUrl"
                        type="text"
                        value={values.documentUrl}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="documentUrl">DocumentUrl</label>
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
              id="landDocumentList"
            >
              <thead>
                <tr>
                  <th>DocumentName</th>
                  <th>PassbookId</th>
                  <th>DocumentUrl</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {landDocumentList.map((lad) => (
                  <tr key={lad.landDocumentId}>
                    <td>{lad.documentName}</td>
                    <td>{lad.passbookId}</td>
                    <td>{lad.documentUrl}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(lad);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(lad.landDocumentId))
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