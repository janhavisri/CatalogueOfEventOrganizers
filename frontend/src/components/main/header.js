import "../../stylesheets/header.css";
const Header =()=>{
  return(
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="container-fluid">
          
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
      
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <a class="navbar-brand mt-2 mt-lg-0 src" href="/main/home">
              <h3>OrganizeEasy</h3>
              
            </a>
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Browse Org</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
            </ul>
      
          </div>
        
        
          <div class="d-flex align-items-center">
      
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
      
          
            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              
            </div>
            
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="/main/login"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              </div>
              </div>
        
        </div>
        
      </nav>
    
    )
};
export default Header;