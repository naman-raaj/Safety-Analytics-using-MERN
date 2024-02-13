import React  from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import logo from "../car.jpg";

const Login = () => {

    const[error,setError]=useState(false)
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()   
    const navigate=useNavigate()

    const handleSubmit=(e)=>{ 
        e.preventDefault()

        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate('/homepage')
            }
           else if(result.data==="No record found"){
           setError(true)
           }
        })

        .catch(err=> console.log(err))
    }



  return (
    <div className="container-fluid mbodi">
      <img className="imgg" src={logo} />
      <div className="login-module">
        
        <form className="formm" onSubmit={handleSubmit}>
        {error?<div className='NRF'>"No Record Found"</div>:''}
        <div className="inner">
       <div className='text'>
          <h2 >Hyundai Safety Analytics</h2>
          <h4 >Sign In</h4>
          </div>
        <div className='fontemail'> 
          <input type="text" 
          htmlFor="email" 
          placeholder="User ID" 
          name="email" 
          required
          onChange={(e)=> setEmail(e.target.value)} className='form-control rounded-0' />
          <i class="fa fa-user fa-lg"></i> 
          </div>
        <div className='fontpassword'> 
          <input
            htmlFor="email"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
            onChange={(e)=> setPassword(e.target.value)} 
                className='form-control rounded-0'
          /> <i class="fa fa-key fa-lg"></i>
          </div>
            <button 
            type="submit" 
            className='btnn'>Login
            </button>
          </div>
        </form>
        <a href="http://localhost:3000/register" className='nw'>Create an account</a>
      
      </div>
    </div>
  );
};


export default Login