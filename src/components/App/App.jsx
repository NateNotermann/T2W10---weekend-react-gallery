import React from 'react';
import './App.css';
// import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

import {useState} from "react";







function App() {


    return (
      //empty element is called a "Fragment"
      <> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>This is my Gallery</p>

        <GalleryItem />

        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="images/car.jpg"/>
        <img src="images/coffee.jpg"/>
        <img src="images/friends.jpg"/>
        <img src="images/internet.jpg"/>
        <img src="images/movies.jpg"/>
        <img src="images/music.jpg"/>
        <img src="images/pizza.jpg"/>
        <img src="images/running.jpg"/>
        <img src="images/streaming.jpg"/>
        <img src="images/travel.jpg"/> */}
      </div>
      
      
      </>
    );
}

export default App;


// ---- TO DO LIST ---- //

// functions
  // GET items
  // Render items

  // Like item
    //Like item clicks/console.logs
  // onClick description

  // number of likes
  // PUT items
  // Delete items


  // -- DOM -- //
  // Images
  // Like button
  