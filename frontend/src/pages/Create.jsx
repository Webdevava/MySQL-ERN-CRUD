import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/student/',values)
    .then(res=>{
        console.log(res)
        navigate('/')
    })
    .catch(err=>console.log(err))
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="bg-white rounded p-3">
        <form onSubmit={formHandler}>
          <h2>Create Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
