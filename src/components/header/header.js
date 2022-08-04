import React, { useState, useEffect, useCallback } from "react";
import "./header.css"
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import { BsChevronDown, BsList } from "react-icons/bs";
import Submenu1 from "../sub-menu/submenu";

const Header = () => {

  const [display, setDisplay] = useState(0);

  const showMenu = (e, index) => {
    document.getElementById("expand").style.height = "60vh";
    setDisplay(index)
  }
    const reset = () => {
      document.getElementById("expand").style.height = "0vh";
    }
    const stay = () => {
      document.getElementById("expand").style.height = "60vh";
    }
    const test = () => {
      document.getElementById("expand").style.height = "60vh";
    }
  

  const navigate = useNavigate();
  return ( 
    <div>
    <div className="navbar">
    <Icon enabled name='angle double left' size='big' />
      <div className="firstChild">
        <img className="logoSize" src={logo}></img>
      </div>
      <div className="secondChild">
      <button onClick={(event) => {
            navigate("/");
        }}>
          <span style={{ display:'inline-flex', alignItems: 'center', color:"black" }}> Home</span>
        </button>  
        <button onClick={(event) => {
            navigate("/books");
        }}>
          <span style={{ display:'inline-flex', alignItems: 'center', color:"#e9967a" }}> Nos livres</span>
        </button>  
        <button  onMouseEnter={event => showMenu(event, 1)}
          onMouseLeave={reset} >
        <span style={{ display:'inline-flex', alignItems: 'center' }}> Demander un devis &nbsp; <BsChevronDown  ></BsChevronDown></span>
        </button>
      </div>
      <div className="thirdChild">
      <button className="contact">
        <span style={{ display:'inline-flex', alignItems: 'center' }}> Nos contacts</span>
        </button>
     
      {/* <button className="borderBottom">
          <BsList></BsList>
  </button> */}
       
      </div>
    </div>
    <div id="expand" className="expandMenu" onMouseLeave={reset} onMouseEnter={stay}>
      {display === 1 ? <Submenu1></Submenu1> : null }
    </div>
    </div>
  );
};


export default Header;