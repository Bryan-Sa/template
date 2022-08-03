import React, { useState, useEffect, useCallback } from "react";
import Header from "../header/header";
import Presentation from "../presentation/presentation";
import Guard from "../guard/guard";
import Footer from "../footer/footer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Guard></Guard>
      <Presentation></Presentation>
     <Footer></Footer>
    </div>
  );
};


export default Home;