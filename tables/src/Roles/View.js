import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const { RoleId }  = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/get/${RoleId}`)
    .then((response) => setUser({...response.data[0] }))
   }, [RoleId]);

  return (
    <div style={{marginTop: "55px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>Details</p>
        </div>
        <div className='container'>
          <strong>RoleId :</strong>
          <span>{user.RoleId}</span>
          <br />
          <br />
          <strong>Name :</strong>
          <span>{user.Name}</span>
          <br />
          <br />
          <strong>Status :</strong>
          <span>{user.Status}</span>
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