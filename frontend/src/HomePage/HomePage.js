import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "../NavBar/NavBar";
import './HomePage.css'

const Sidebar = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3001/Sidebar")
      .then((result) => setEmployees(result.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(employees);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteEmployee/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
     <div class="container-fluid row col md-3">
        <NavBar></NavBar>
        </div>
      <div class="row  flex-nowrap">
         <div class=" col-md-3 col-xl-2  px-0 bg-primary">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <a href="/Homepage/dashboard" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>{" "}
                  <span class="ms-1 usr text-white d-none d-sm-inline">
                    Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-speedometer2"></i>{" "}
                  <span class="ms-1 usr text-white d-none d-sm-inline">
                    Safety analytics 360
                  </span>{" "}
                </a>
                <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li class="w-100">
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Competitive analytics
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Homepage/usermanagement"
                      class="nav-link w3-bar-item w3-button w3-red mng px-0 active"
                    >
                      {" "}
                      <span class="active">
                        User Management
                      </span>{" "}
                    </a>
                  </li>
                 
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        {" "}
                        Insights
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Dealer
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Claims
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Recommendations
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Connections
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Make
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      {" "}
                      <span class="d-none usr text-white d-sm-inline">
                        Manual Data Upload
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>



        <div class=" content row col md-9">
          <h2 className="user">User Management</h2>
          <div className="box-nav  newcl">
            <Link to="/create" className=" btn2">
              {" "}
              <span className="text-gradient">
                New User 
              </span>
            </Link>
          </div>
          <form>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.name} </td>
                      <td> {employee.email} </td>
                      <td> {employee.role}</td>
                      <td> {employee.status}</td>
                      <td>
                          <Link
                          to={`/Homepage/update/${employee._id}`}
                          className="udpate"
                        >
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </Link> 
                        <Link
                         
                          onClick={(e) => handleDelete(employee._id)}
                        >
                        <i class="fa fa-trash-o delte "></i>
                        </Link>

                
        
                      </td>
                    </tr>
                  );
                })}
               
              </tbody>
            </table>
          </form>
        </div>
   </div>
   
   </>
  );
};

export default Sidebar;
