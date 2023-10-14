import React, {  useState } from 'react';
import "./Navbar.css";
import { navitem } from "./Navitem";
import { Link } from "react-router-dom";




function Navbar() {
 const [click,setclick] =useState(false);
  const handleclick =() => setclick(!click);
  const closeMobileMenu = () => setclick(false);

   return (
  <>   
        <nav className="navbar">
            <h1 className='navbar-logo' onClick={closeMobileMenu}>TRAVEL LIFE <i className='fab fa-typo3' /></h1>
       <div className='menu-icon' onClick={handleclick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
       
       </div>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navitem.map((item,index) =>{
        return(
          <li key ={index}>
        <Link className={item.className} to={item.url}onClick={closeMobileMenu}>
        <i className={item.icon}></i>
      {item.title}
        </Link>
      </li>
        ) 
        })}
      
       </ul>
      
       </nav>
       
  </>
  );
}


export default Navbar;