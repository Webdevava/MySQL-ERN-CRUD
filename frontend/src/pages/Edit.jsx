import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const Edit = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
      });
  const navigate = useNavigate();


      const { id } = useParams();

      useEffect(() => {
        // Fetch data when the component mounts
        axios.get("http://localhost:8000/read/"+id)
          .then((res) => setValues({...values,name:res.data[0].Name,email:res.data[0].Email}))
          .catch((err) => console.log(err));
      }, []); // Add id to the dependency array to re-run the effect when id changes
    

      const formHandler = (e) => {
        e.preventDefault();
    
        axios.put('http://localhost:8000/update/'+id,values)
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(err=>console.log(err))
      };


  return (
    <div className="d-flex flex-column vh-100 bg-primary justify-content-center align-items-center">
    <div className="bg-white rounded p-3">
    <form onSubmit={formHandler}>
    <h2>Edit Student</h2>
    <div className="mb-2">
    <label htmlFor="">Name</label>
    <input
    type="text"
    className="form-control"
    placeholder="Enter Name"
    onChange={(e) => setValues({ ...values, name: e.target.value })}
    value={values.name}
    />
    </div>
    <div className="mb-2">
    <label htmlFor="">Email</label>
    <input
    type="email"
    className="form-control"
    placeholder="Enter Email"
    onChange={(e) => setValues({ ...values, email: e.target.value })}
    value={values.email}
    />
    </div>
    <Link to={'/'} className="btn btn-info m-2">Back</Link>
    <button className="btn btn-success m-2">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Edit
