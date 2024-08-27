import React, { useState } from 'react';
import axios from 'axios';
import signupvalidator from '../Validators/signupvalidations';
import {useNavigate} from "react-router-dom"
import "./Signupstyle.css";

const initialFormData = { name: "", email: "", password: "", confirmpassword: "" };
const initialErrorForm = { name: "", email: "", password: "", confirmpassword: "" };

const Register = () => {
  const [formdata, setformdata] = useState(initialFormData);
  const [formerror, setformerror] = useState(initialErrorForm);
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();


  const handlechange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const errors = signupvalidator({
      name: formdata.name,
      email: formdata.email,
      password: formdata.password,
      confirmpassword: formdata.confirmpassword,
    });

    if (errors.name || errors.email || errors.password || errors.confirmpassword) {
      setformerror(errors);
    } else {
      try {
        setloading(true);
        const reqbody = {
          name: formdata.name,
          email: formdata.email,
          password: formdata.password,
          confirmpassword: formdata.confirmpassword,
        };
        const response = await axios.post("http://localhost:8000/api/user/signup", reqbody);
        console.log(response);
        setformdata(initialFormData);
        setformerror(initialErrorForm);
        navigate("/login")
      }catch (error) {
        console.error("Error response:", error.message);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <>
      <h1 className='mx-5 mb-4'>Sign up</h1>
      <form className='container' onSubmit={handlesubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={formdata.name}
            onChange={handlechange}
          />
          {formerror.name && <p className='error'>{formerror.name}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            value={formdata.email}
            onChange={handlechange}
          />
          {formerror.email && <p className='error'>{formerror.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formdata.password}
            onChange={handlechange}
          />
          {formerror.password && <p className='error'>{formerror.password}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword"
            name="confirmpassword"
            value={formdata.confirmpassword}
            onChange={handlechange}
          />
          {formerror.confirmpassword && <p className='error'>{formerror.confirmpassword}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : "Signup"}
        </button>
      </form>
    </>
  );
}
export default Register;
