import React from 'react'

function NavBar() {
  return (
    
    <div class=" row col md-12">
 
  <nav class="navbar">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span><span>SAFETY ANALYTICS</span>
      
    </button>
    <a class="link-white me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
                        data-mdb-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                            <span class="badge rounded-pill badge-notification bg-info">1</span>
                            <a href="/"><i class="fa fa-fw fa-user"></i>Admin   </a>

                        </a> 
                       
  </nav>
</div>
  )
}

export default NavBar
