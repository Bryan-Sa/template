import React, { useState, useEffect, useCallback } from "react";
import Api from "../api"
import Header from "../header/header.js";
import Footer from "../footer/footer.js"
import "./book.css"
const Books = () => {

    const [books, setBooks] = useState("");
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [img, setImg] = useState([]);
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        const fetchUrl = async () => {
            let data = await Api.Books();
            let titleArray = [];
            let descriptionArray = [];
            let imgUrl = [];
            let authorArray = [];
            //url.map();
            for (var i = 0; i < data.results.lists[0].books.length; i++) {
                titleArray.push(data.results.lists[0].books[i].title);
                descriptionArray.push(data.results.lists[0].books[i].description);
                imgUrl.push(data.results.lists[0].books[i].book_image);
                authorArray.push(data.results.lists[0].books[i].author);
            }
            setTitle(titleArray);
            setImg(imgUrl);
            setAuthor(authorArray);
            setDescription(descriptionArray);
        }
        fetchUrl();
    }, [title]);

    return (
        <div>
            <Header></Header>

            
            <div className="bookContainer">
            {title.map((element, index) => (
                <div className="informationContainer" style={ index % 2 != 0 ? {backgroundColor:"#E9967A"} : null}>
                    <div className="smallerSplit">
                        <div className="imgBook">
                            <img style={{width:"100%", height:"100%"}}src={img[index]}></img>
                            <p>Author: {author[index]}</p>
                        </div>
                    </div>
                    <div className="bookSplit">
                        <div style={{marginTop:"2%"}}>
                        <span>Title: </span>
                        </div>
                        <p>{element}</p>
                        <span>Description: </span>
                        <p>{description[index]}</p>
                    </div>

                </div>
                ))}
            </div> 

            {/*  {title.map((element, index) => (
                <div>
                 {element}
                 <div>
                 {description[index]}
                 </div>
                </div>

          ))} */}
            <Footer></Footer>

        </div>
    );
};


export default Books;