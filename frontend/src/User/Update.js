
import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

const Update=()=> {
    const{id}=useParams()
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[role,setRole]=useState();
    const[status,setStatus]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getEmployee/'+id)
        .then(result=> {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setRole(result.data.role) 
            setStatus(result.data.status)
        })        
        .catch(err=>console.log(err))
      },[])
    
    const Updatebutton=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/update/"+id,{name,email,role,status})
        .then(result=>{
            console.log(result)
            navigate('/homepage')
        })
        .catch(err=> console.log(err))

    }
  return (
    
         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Updatebutton}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type="text" 
                    name="name" 
                    placeholder='Enter your name' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='form-control1'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type="text"
                     name="email" 
                     placeholder='Enter your email' 
                     value={email}
                     onChange={(e)=> setEmail(e.target.value)}
                     className='form-control1'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Role</label>
                    <input type="text" 
                    name="role" 
                    placeholder='Enter your role' 
                    value={role}
                    onChange={(e)=> setRole(e.target.value)}
                    className='form-control1'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Status</label>
                    <input type="text" 
                    name="status" 
                    placeholder='Enter your status' 
                  value={status}
                  onChange={(e)=> setStatus(e.target.value)}
                    className='form-control1'/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>

   </div>
  )
}

 
export default Update