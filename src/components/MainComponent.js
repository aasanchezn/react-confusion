import React from 'react';
import MenuComponent from './MenuComponent';
import { useState } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route } from "react-router-dom";
import Contact from './ContactComponent';
import { DishDetails } from './DishDetailsComponent';
import About from './AboutComponent';


function Main() {

  return (
    <>
    <div className="App">
      <Header/>
    <Routes>
      <Route  path="/home"  element={<Home/>} />
      <Route  path="/menu"  element={<MenuComponent/>}/>
      <Route  path="/menu/:id"  element={<DishDetails/>}/>
      <Route  path="/contactus" element={<Contact/>}/>  
      <Route  path="/aboutus" element={<About/>}/>
      <Route  path="*"  element={<Home/>} />
    </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}
export default Main;