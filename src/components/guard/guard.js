import React, { useState, useEffect, useCallback } from "react";
import "./guard.css"

import Harry from "../../images/harry.jpeg"
import Agatha from "../../images/agatha.jpg"
import Histoire from "../../images/histoire.jpg"
import Seigneur from "../../images/seigneur.jpg"
//import Presentation from "../presentation/presentation";
//import Footer from "../footer/footer";
const Guard = () => {
    return (
        <div className="guardContainer">
            <h5>MA BOUTIQUE</h5>
            <p className="storeTitle">NOM DE LA BOUTIQUE</p>
            <div className="guardImage"></div>
            <div className="catchPhrase">
                <span style={{ color: "#e9967a" }}>Ici </span>
                <span>commence votre </span>
                <span style={{ color: "#e9967a" }}>aventure</span>
            </div>
            <div className="bookInline">
                <div className="first">
                    <img  src={Harry}></img>
                </div>
                <div className="second">
                <img   src={Agatha}></img>
                </div>
                <div className="first">
                <img  src={Histoire}></img>
                </div>
                <div className="second">
                <img  src={Seigneur}></img>
                </div>
            </div>
        </div>
    );
};


export default Guard;