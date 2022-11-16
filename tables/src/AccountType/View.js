import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const { AccountTypeId }  = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${AccountTypeId}`)
    .then((response) => setUser({...response.data[0] }))
   }, [AccountTypeId]);

  return (
    <div style={{marginTop: "55px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>Details</p>
        </div>
        <div className='container'>
          <strong>AccountTypeId :</strong>
          <span>{user.AccountTypeId}</span>
          <br />
          <br />
          <strong>AccountName :</strong>
          <span>{user.AccountName}</span>
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
