import React ,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'

 const Navbar= (props) => {
    const [search,setSearch] = useState(false);
     const submitSearch= (e)=>{
        
         e.preventDefault();
         alert("searched");
     }

     const openSearch=()=>{
         setSearch(true);
     }
     const searchClass =search ?'searchinput active':'searchinput';
    return (
        <div className="navbar">
          <ul className="navbarMenu">
              <li> <NavLink to ="/home"> Home</NavLink></li>
              <li> <NavLink to ="/about-us">About Us</NavLink></li>
              <li> <NavLink to ="post">Posts</NavLink></li>
              <li> <NavLink to ="/contact-us"> Contact Us</NavLink></li>
              
              

          </ul>
          <div className="search"> 
               <form  onSubmit={submitSearch}>
               <input className={searchClass} type="text" placeholder="search"/>
              <img onClick={openSearch} className="searchicon" src={require("../../Assets/icons/search.png")} alt="Search"/>
          </form>
             
          </div>
        </div>
    )
}
 export default Navbar;