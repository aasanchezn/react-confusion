import React from 'react';
import MenuComponent from './MenuComponent';
import {DISHES} from "../data/dishes";
import { COMMENTS } from '../data/comments';
import { PROMOTIONS } from '../data/promotions';
import { LEADERS } from '../data/leaders';
import { useState } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route } from "react-router-dom";
import Contact from './ContactComponent';
import { DishDetails } from './DishDetailsComponent';
import About from './AboutComponent';


function Main() {
  const [dishes,setDishes]=useState(DISHES);
  const [promotions,setPromotions]=useState(PROMOTIONS);
  const [comments,setComments]=useState(COMMENTS);
  const [leaders,setLeaders]=useState(LEADERS);
  return (
    <>
    <div className="App">
      <Header/>

    <Routes>
    <Route 
        path="/home" 
      element={
        <Home 
          dishFeatured={dishes.filter((dish)=> dish.featured )[0]}
          promotionFeatured={promotions.filter((promotion)=> promotion.featured )[0]}
          leaderFeatured={leaders.filter((leader)=> leader.featured )[0]}
        />
      } 
    />
    <Route
        path="/menu"
        element={<MenuComponent dishes={dishes} />}/>
    <Route
        path="/menu/:id"
        element={<DishDetails dishes={dishes} comments={comments}/>}/>

    
    <Route
          path="/contactus"
          element={<Contact/>}
        />
    <Route
      path="/aboutus"
      element={<About leaders={leaders}/>}
      />
    <Route path="*" 
    element={
        <Home 
        dishFeatured={dishes.filter((dish)=> dish.featured )[0]}
        promotionFeatured={promotions.filter((promotion)=> promotion.featured )[0]}
        leaderFeatured={leaders.filter((leader)=> leader.featured )[0]}
      />} />
      </Routes>

    </div>

    <div>
      <Footer/>
    </div>
    </>
  );
}
export default Main;