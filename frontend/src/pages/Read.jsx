import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get("http://localhost:8000/read/"+id)
      .then((res) => setdata(res.data[0]))
      .catch((err) => console.log(err));
  }, []); // Add id to the dependency array to re-run the effect when id changes

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <h2>Student's Detail</h2>
      <div className="m-10">
      <h3>Id: {data.ID}</h3>
      <h3>Name: {data.Name}</h3>
      <h3>Email: {data.Email}</h3>
      </div>
 
        <Link to={'/'} className='btn btn-primary'>Back</Link>
        <Link to={`/edit/${data.ID}`} className='btn btn-info'>Edit</Link>
      </div>
    </div>
  );
};

export default Read;
