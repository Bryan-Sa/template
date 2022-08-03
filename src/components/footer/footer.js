import React, { useState, useEffect, useCallback, useRef } from "react";
import "./footer.css"

const Footer = () => {
  const firstDivRef = useRef();
  const secondDivRef = useRef();
  const [show, setShow] = useState("show");
  const [black, setBlack] = useState("hide");

  const revert = () => {
    setShow("show");
    setBlack("hide");
  }
  const handleScrollFirst = (scroll) => {
    secondDivRef.current.scrollLeft = scroll.target.scrollLeft;
  };

  const handleScrollSecond = (scroll) => {
    firstDivRef.current.scrollLeft = scroll.target.scrollLeft;
  };
 
  return (
    <div className="container">
         <p style={{fontSize:"25px", marginTop: "3%"}}>Email, LinkedIn</p>
         <p style={{fontSize:"17px", marginTop: "0%"}}>bryan.sa.sb@gmail.com</p>
         <span style={{fontSize:"17px", marginTop: "0%", color:"white"}}><a style={{color:"white"}}href="https://www.linkedin.com/in/bryan-sa-563028189" target="_blank">www.linkedin.com/in/bryan-sa-563028189</a></span>
    </div>
  );
};


export default Footer;