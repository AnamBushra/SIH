import "../navbar/navbar.scss";
import { useState } from "react";

import img3 from "../navbar/logo.png"


  // Close the dropdown menu if the user clicks outside of it
 
const Navbar = (props) => {
	// const { setSearch } = useState("");
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
    
	return (
		<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#FFFFFF"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/login"><img className='logo' height="50px" width="50px" style={{borderRadius:"50%"}} src={img3}/></a>

    <a className="navbar-brand" href="/login" style={{color:"black",fontWeight:"500"}}>{props.lang==="eng"?"EduConnect":"എഡ്‌മൿട്"} </a>
    
		


		
   
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
      
	  <div className="collapse navbar-collapse justify-content-end" 
             id="navbarSupportedContent">
          <ul className="navbar-nav">
			<li className="nav-item mt-3">
			<div className={`form-check form-switch text-dark`} >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{opacity:"0"}} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:"black",cursor:"pointer"}} onClick={props.handleLang}><u>{props.lang==="eng"?"Malayalam":"English"}</u></label>
</div>
			</li>
           
			
            
          </ul>
        </div>
	  {/* <img className="justify-content-end" alt="" height="50px" width="50px"  src={img} style={{borderRadius:"50%"}} /> */}
      {/* </ul> */}

      
  </div>
</nav>

	);
};

export default Navbar;
