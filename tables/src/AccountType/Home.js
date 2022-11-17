  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import {Link} from "react-router-dom";
  import { Alert } from "bootstrap";

  const initialFieldValues = {
    accountTypeId: 0,
    accountName: "",
  };
  export default function AccountType(props) {
    const [accounttypeList, setAccountTypeList] = useState([]);
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
      temp.accountName = values.accountName === "" ? false : true;
      setErrors(temp);
      return Object.values(temp).every((x) => x === true);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        const formData = new FormData();
        formData.append("accountTypeId", values.accountTypeId);
        formData.append("accountName", values.accountName);
        console.log(values);
        addOrEdit(formData, resetForm);
      }
    };
    const applicationAPI = (
      url = "http://localhost:5001/api/get/AccountType"
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
      if (formData.get("accountTypeId") === "0") {
        applicationAPI()
          .create(formData)
          .then((res) => {
            Alert("New AccountType Added");
            resetForm();
            refreshAccountTypeList();
          });
      } else {
        applicationAPI()
          .update(formData.get("accountTypeId"), formData)
          .then((res) => {
            Alert("AccountType Details Updated");
            resetForm();
            refreshAccountTypeList();
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
            Alert("Account Type Deleted Succesfully");
            refreshAccountTypeList();
          })
          .catch((err) => Alert("AccountType Deleted Failed"));
    };
    const resetForm = () => {
      setValues(initialFieldValues);
    };
    function refreshAccountTypeList() {
      applicationAPI()
        .fetchAll()
        .then((res) => setAccountTypeList(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      refreshAccountTypeList();
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
                Dashboard <i className="fa fa-angle-right" /> Account Type
              </span>
              <div className="row mt-3">
                <div className="col-sm-12">
                  <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                    <h6 className="mb-3">AccountType Details</h6>
                    <div className="form-group row floating-label">
                      <div className="col-sm-4 col-12">
                        <input
                          className={"form-control" + applyErrorClass("business")}
                          name="AccountName"
                          type="text"
                          value={values.accountName}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="account">accountName</label>
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
                id="businessTypeList"
              >
                <thead>
                  <tr>
                    <th>AccountName</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {accounttypeList.map((acc) => (
                    <tr key={acc.accountTypeId}>
                      <td>{acc.accountName}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm mr-2"
                          onClick={() => {
                            showEditDetails(acc);
                          }}
                        >
                          <i className="fas fa-pencil-alt" />
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={(e) =>
                            onDelete(e, parseInt(acc.accountTypeId))
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