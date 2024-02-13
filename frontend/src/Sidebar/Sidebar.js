import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      
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
                   href="/Homepage"
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

</div>






    </div>
  )
}

export default Sidebar