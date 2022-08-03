import React, { useState, useEffect, useCallback } from "react";
import "./presentation.css"
import Templateimg from "../../images/template1.jpg"
//import Presentation from "../presentation/presentation";
//import Footer from "../footer/footer";
const Presentation = () => {
    return (
        <div className="presentationContainer">
            <div className="mainContainer">
                <div className="split two" >
                    <span className="titleSize" >Lorem ipsum</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis turpis massa, vel venenatis erat accumsan quis. Aliquam in placerat quam. Ut convallis commodo libero. Pellentesque ultrices felis consectetur fringilla sollicitudin. Nam rutrum sit amet nibh ut mollis. Aliquam nulla ipsum, feugiat sed metus a, vestibulum facilisis metus. Vivamus at turpis malesuada, finibus orci vitae, gravida risus. Maecenas aliquet suscipit congue. Curabitur vestibulum eleifend faucibus. Phasellus ac malesuada dui. Proin sodales arcu sit amet tortor efficitur, at molestie orci suscipit. Sed scelerisque efficitur nunc.

                        Nam maximus, magna a dictum ultricies, nunc dolor mattis elit.</p>
                    <span className="titleSize spanBlock" >Lorem ipsum</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis turpis massa, vel venenatis erat accumsan quis. Aliquam in placerat quam. Ut convallis commodo libero. Pellentesque ultrices felis consectetur fringilla sollicitudin. Nam rutrum sit amet nibh ut mollis. Aliquam nulla ipsum, feugiat sed metus a, vestibulum facilisis metus. Vivamus at turpis malesuada, finibus orci vitae, gravida risus. Maecenas aliquet suscipit congue. Curabitur vestibulum eleifend faucibus. Phasellus ac malesuada dui. Proin sodales arcu sit amet tortor efficitur, at molestie orci suscipit. Sed scelerisque efficitur nunc.

                        Nam maximus, magna a dictum ultricies, nunc dolor mattis elit.</p>
                </div>
                <div className="split one">
                    <div className="imgTemplate">
                    <img src={Templateimg} className="imgtest"></img>
                    <span>Illustration : https://www.techradar.com/best/free-stock-photos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Presentation;