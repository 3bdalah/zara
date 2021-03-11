import React ,{ useRef, useState,useEffect } from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import logo from "../../src/logo.svg";
import {FaBars} from "react-icons/fa"
const Navbar = ({countProducts}) => {
    
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
   
    return (
        <nav>
            <div className="container">
             <div className="nav-center">
            
                <div className="nav-header">
                   <Link to="/">
                       <img src={logo} alt="logo" className="logo" />
                   </Link>
                   <button className={!showLinks ? 'nav-toggle':'nav-toggle active'} onClick={() => toggleLinks()} >
                   <FaBars />
                 </button>
                </div>
                <div className="menu links-container">
                    <ul className={showLinks ? "list-nav links show " : "list-nav links "} >
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/about">about</Link></li>
                        <li> <Link to="/contact">contact</Link></li>
                        <li> <Link to="/products">  products </Link> </li> 
                        <li> <Link to="/cart"> Cart    <span className="count-items">{countProducts}</span> </Link> </li>
                    </ul>
                </div>  
             </div>
             </div>
           
        </nav>
    )
}

export default connect((coverData)=>{
  return{
      countProducts : coverData.Cart.countProducts
  }
})(Navbar);