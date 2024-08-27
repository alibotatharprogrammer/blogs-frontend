import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import loginvalidator from '../Validators/loginvalidators';
import "./Signupstyle.css"
import { useNavigate } from 'react-router-dom';

const initialFormData = { email: "", password: "" };
const initialErrorForm = { email: "", password: "" };

const Login = () => {
  const [formdata, setformdata] = useState(initialFormData);
  const [formerror, setformerror] = useState(initialErrorForm);
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();

  const handlechange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const errors = loginvalidator({
      email: formdata.email,
      password: formdata.password
    });

    if (errors.email || errors.password) {
      setformerror(errors);
    } else {
      try {
        setloading(true);
        const response = await axios.post("http://localhost:8000/api/user/login", formdata);
        console.log(response);
        const data=response.data;

        window.localStorage.setItem("blogdata",JSON.stringify(data.data))
        setformdata(initialFormData);
        setformerror(initialErrorForm);
        navigate("/home")
      } catch (error) {
        console.error("Error response:", error.message);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <>
      <h1 className='mx-5 mb-4'>Login</h1>
      <form className='container' onSubmit={handlesubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formdata.email} onChange={handlechange} name="email" />
          {formerror.email && <p className='error'>{formerror.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={formdata.password} onChange={handlechange} name="password"/>
          {formerror.password && <p className='error'>{formerror.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "login processing..." : "login"}
        </button>
      </form>
    </>
  )
}

export default Login
