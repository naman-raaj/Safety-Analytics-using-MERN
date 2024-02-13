import React  from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../car.jpg";

function Signup() {
    const [name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
           navigate('/login')
        })

        .catch(err=> console.log(err))
    }

  return ( 
    <div className="container-fluid mbodi2">
    <img className="imgg2" src={logo} />
    <div className='signupmodule'  >
    <h2 className='text'>Hundai Safety Analytics</h2>
        <h4 className='text'>Sign Up</h4>
        <form className="form2" onSubmit={handleSubmit}> 
           <div className='inner2'> 
                <input 
                type="text" 
                placeholder='Enter your name' 
                name='name'
                required
                onChange={(e)=> setName(e.target.value)} className='form-control rounded-0'/>
            
                <input 
                type="email" 
                placeholder='Enter your mail' 
                name='email'
                required
                onChange={(e)=> setEmail(e.target.value)} className='form-control rounded-0'/>
        
                <input 
                type="password" 
                placeholder='Enter your password' 
                name='password'
                required
                onChange={(e)=> setPassword(e.target.value)} 
                className='form-control rounded-0'/>
         
            <button 
            type="submit" 
            className='btn rounded-0 btn2'>SignUp
            </button>
            </div>          
        </form>
           <a href="http://localhost:3000/login" className='nw'>Already have an account</a>
                
     
    </div>

</div>

  )
}

export default Signup