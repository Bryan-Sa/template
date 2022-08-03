import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/homepage/home";
import Books from "./components/book_list/book";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/books" element={<Books></Books>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;