import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./component/Home";
import RestaurantMenu from "./component/RestaurantMenu";

function App(){
 
    return (
        <>
         <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
           </Routes>
         </BrowserRouter>
        </>
    )
   
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


//  npx parcel src/index.html
//  git: ko untrack krna : command promot me likho : rmdir /s /q .git