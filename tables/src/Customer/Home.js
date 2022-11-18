import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Alert } from "bootstrap";

const initialFieldValues = {
  customerId: 0,
  name: "",
  customerNo: "",
  email: "",
  mobile:"",
  alternateMobile:"",
  address:"",
  createdDate: new Date().toLocaleString(),
  updatedDate: new Date().toLocaleString(),
  dateOfJoin: new Date().toLocaleString(),
  status:"",

};
export default function Customer(props) {
  const [customerList, setCustomerList] = useState([]);
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
    temp.customerNo = values.customerNo === "" ? false : true;
    temp.email = values.email === "" ? false : true;
    temp.mobile = values.mobile === "" ? false : true;
    temp.alternateMobile = values.alternateMobile === "" ? false : true;
    temp.address = values.address === "" ? false : true;
    temp.createdDate = values.createdDate === "" ? false : true;
    temp.updatedDate = values.updatedDate === "" ? false : true;
    temp.dateOfJoin = values.dateOfJoin === "" ? false : true;
    temp.status = values.status === "" ? false : true;

    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("customerId", values.customerId);
      formData.append("name", values.name);
      formData.append("customerNo", values.customerNo);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("alternateMobile", values.alternateMobile);
      formData.append("address", values.address);
      formData.append("createdDate", values.createdDate);
      formData.append("updatedDate", values.updatedDate);
      formData.append("dateOfJoin", values.dateOfJoin);
      formData.append("status", values.status);
      console.log(values);
      addOrEdit(formData, resetForm);
    }
  };
  const applicationAPI = (
    url = "http://localhost:5001/api/get/Customer"
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
    if (formData.get("customerId") === "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          Alert("New Customer Added");
          resetForm();
          refreshCustomerList();
        });
    } else {
      applicationAPI()
        .update(formData.get("customerId"), formData)
        .then((res) => {
          Alert("Customer Details Updated");
          resetForm();
          refreshCustomerList();
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
          Alert("Customer Type Deleted Succesfully");
          refreshCustomerList();
        })
        .catch((err) => Alert("Customer Deleted Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
  };
  function refreshCustomerList() {
    applicationAPI()
      .fetchAll()
      .then((res) => setCustomerList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshCustomerList();
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
              Dashboard <i className="fa fa-angle-right" />  Customer Type
            </span>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                  <h6 className="mb-3">Customer Details</h6>
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
                        className={"form-control" + applyErrorClass("customerNo")}
                        name="customerNo"
                        type="text"
                        value={values.customerNo}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="customerNo">CustomerNo</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("email")}
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("mobile")}
                        name="mobile"
                        type="text"
                        value={values.mobile}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        className={"form-control" + applyErrorClass("alternateMobile")}
                        name="alternateMobile"
                        type="text"
                        value={values.alternateMobile}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="alternateMobile">AlternateMobile</label>
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
                        className={"form-control" + applyErrorClass("dateOfJoin")}
                        name="dateOfJoin"
                        type="date"
                        value={values.dateOfJoin}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="dateOfJoin">dateOfJoin</label>
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
              id="customerList"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>CustomerNo</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>AlternateMobile</th>
                  <th>Address</th>
                  <th>CreatedDate</th>
                  <th>UpdatedDate</th>
                  <th>DateOfJoin</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customerList.map((cus) => (
                  <tr key={cus.customerId}>
                    <td>{cus.name}</td>
                    <td>{cus.customerNo}</td>
                    <td>{cus.email}</td>
                    <td>{cus.mobile}</td>
                    <td>{cus.alternateMobile}</td>
                    <td>{cus.address}</td>
                    <td>{cus.createdDate}</td>
                    <td>{cus.updatedDate}</td>
                    <td>{cus.dateOfJoin}</td>
                    <td>{cus.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm mr-2"
                        onClick={() => {
                          showEditDetails(cus);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) =>
                          onDelete(e, parseInt(cus.customerId))
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