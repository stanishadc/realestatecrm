import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${id}`)
    .then((response) => setUser({...response.data[0] }))
   }, [id]);

  return (
    <div style={{marginTop: "55px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>Details</p>
        </div>
        <div className='container'>
          <strong>ID :</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Employee Name :</strong>
          <span>{user.emp_name}</span>
          <br />
          <br />
          <strong>Department :</strong>
          <span>{user.department}</span>
          <br />
          <br />
          <strong>City :</strong>
          <span>{user.city}</span>
          <br />
          <br />
          <strong>Salary :</strong>
          <span>{user.salary}</span>
          <br />
          <br />
          <Link to = "/" >
            <div className='btn btn-goback'>Go Back</div>
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default View
