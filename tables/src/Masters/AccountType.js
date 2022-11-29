import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  AccountTypeId: 0,

};
export default function AccountType(props) {
  const [accounttypeList, setAccountTypeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState("");
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState({});
  const [accountName, setAccountName] = useState("");
  const [newAccountName, setNewAccountName] = useState("");


  useEffect(() => {
    if (recordForEdit !== accountName) setValues(recordForEdit);
  }, [recordForEdit]);

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
      formData.append("AccountTypeId", values.AccountTypeId);
      formData.append("accountName", values.accountName);
      console.log(values);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/AccountType"
  ) => {
    return {
      fetchAll: () => Axios.get(url),
      create: (newRecord) => Axios.post(url, newRecord),
      update: (id, updateRecord) =>
        Axios.put(url + id, updateRecord),
      delete: (id) => Axios.delete(url  + id),
    };
  };
  
  const addAccount = () => {
    Axios.post("http://localhost:5001/create", {
      accountName: accountName,
    }).then(() => {
      setAccountTypeList([
        ...accounttypeList,
        {
          accountName: accountName,
        },
      ]);
    });
  };

  const updateAccountName = (AccountTypeId) => {
    Axios.put("http://localhost:5001/update", { accountName: newAccountName, AccountTypeId: AccountTypeId }).then(
      (response) => {
        setAccountTypeList(
          accounttypeList.map((val) => {
            return val.AccountTypeId == AccountTypeId
              ? {
                  AccountTypeId: val.AccountTypeId,
                  accountName: newAccountName,
                }
              : val;
          })
        );
      }
    );
  };
  
  const showEditDetails = (data) => {
    setRecordForEdit(data);
  }

  const onDelete = (e,AccountTypeId) => {
    if (window.confirm("Are you sure to delete this record?"))
    Axios.delete(`http://localhost:5001/delete/${AccountTypeId}`)
      applicationAPI()
        .delete(AccountTypeId)
        .then((res) => {
          setAccountTypeList.filter((val) => {
            return val.AccountTypeId != AccountTypeId;
          })
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
              Dashboard <i className="fa fa-angle-right" /> AccountType
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">AccountType Details</h6>
                  <div className="form-group row floating-label">
                    <div className="col-sm-4 col-12">
                      <input
                        className={"form-control" + applyErrorClass("accountName")}
                        name="accountName"
                        type="text"
                        value={values.accountName}
                        onChange={(event) => {
                          setAccountName(event.target.value);
                        }}
                      />
                      <label htmlFor="AccountName">AccountName</label>
                    </div>
                    
                    <div className="col-sm-4">
                      <button 
                      type="submit" 
                      className="btn btn-primary mr-3"
                      onClick={addAccount}
                      >
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
              id="accounttypeList"
            >
              <thead>
                <tr>
                  <th>AccountName</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {accounttypeList.map((val) => (
                  <tr key={val.AccountTypeId}>
                    <td>{val.AccountName}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          updateAccountName(val.AccountTypeId);
                        }}>
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(val.AccountTypeId))
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