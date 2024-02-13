 
 const express=require("express");
 const mongoose=require('mongoose');
 const cors= require("cors");
 const EmployeeModel=require('./models/Employee');
 const Jwt=require('jsonwebtoken');
 const jwtKey='mern'


 const app=express()
  app.use(express.json())
  app.use(cors())


  mongoose.connect("mongodb://127.0.0.1:27017/employee")

  //Login API
  app.post('/login',(req,res)=>{
   const {email,password}=req.body
   EmployeeModel.find({email:email})  
   .then(user=>{
    console.log('user',user,user.password,password)
    if(user.length!==0){
      Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
          res.send({user,auth:token})
      })
        if(user[0].password==password){ 
            res.json("Success")  
            
        }     
        else {
            res.json("The password is incorrect")
           
        }
   } 
   else {
    res.json("No record found")
   } 
})  
  
})  

//Fetching data from database API

app.post("/sidebar",(req,res)=>{
  EmployeeModel.find()
  .then(employees=>res.json(employees))
  .catch(err=> res.json(err))
})

//API For creating an account 
  app.post('/register',(req,res)=>{
            EmployeeModel.create(req.body)
            .then(employees =>res.json(employees))
            .catch(err=> res.json(err))
  })


  //API For creating a new data in user management
  app.post("/create",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .catch(err=>res.json(err))
  })

  //API for updating records
  app.get('/getEmployee/:id',(req,res)=>{
    const id=req.params.id;
    EmployeeModel.findById({_id:id})
    .then(employees=>res.json(employees))
    .catch(err=> res.json(err))
  })

  //API for updated user details show
  app.put('/update/:id',(req,res)=>{
    const id=req.params.id
    EmployeeModel.findByIdAndUpdate({_id:id},{name:req.body.name,
      email:req.body.email,
      role:req.body.role,
      status:req.body.status})
      .then(employees=>res.json(employees))
      .catch(err=> res.json(err))
  })

//API FOR DELETING USER
app.delete('/deleteEmployee/:id',(req,res)=>{
      const id=req.params.id;
      EmployeeModel.findByIdAndDelete({_id:id})
      .then(res=>res.json(res))
      .catch(err=>res.json(err))
})



  app.listen(3001,()=>{
    console.log("Server is running")
  })
