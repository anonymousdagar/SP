import React, { useState } from "react";
import ContainerBox from "./ContainerBox/ContainerBox";
import HeaderBar from "./Header/Header";
import "./HomePage.css";
import VerticalNavbar from "./VerticalNavbar/VerticalNavbar";

const HomePage = () => {
  const [contentContainer,setContentContainer]=useState('Dashboard');
  const vNavbar=(navItem)=>{
    setContentContainer(navItem);
  }


  return (
    <div className="container">
      <header>
        <HeaderBar/>
      </header> 
      <main>
        <VerticalNavbar navItem={vNavbar}/>
        <ContainerBox content={contentContainer}/>
      </main>
    </div>
  );
};

export default HomePage;
