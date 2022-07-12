import React, { useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryListFunction from '../GalleryList/GalleryList';
import {useState} from "react";
import Header from './Header/Header';
import axios from 'axios';





function App() {

  const [galleryList, setGalleryList] =useState([]);

useEffect(() => {
  fetchGalleryList();
    console.log('handshake test fetchGallery');
}, [] );

const fetchGalleryList = () => {
  axios.get('gallery')
  .then((response) => {
    console.log('IN get /gallery');
    setGalleryList(response.data);
  })
  .catch((err) => {
    console.log('ERROR in AXIOS GET(APP.JSX')
  });
};

console.log('gallery list is:', galleryList );

    return (
      //empty element is called a "Fragment"
      <> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>This is my Gallery</p>

        <GalleryItem />
        <GalleryListFunction />
        <Header 
        taco= 'yes'
        title= 'Hello World!'
        />
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="images/car.jpg"/>
        <img src="images/coffee.jpg"/>
        <img src="images/friends.jpg"/>
        <img src="images/internet.jpg"/>
        <img src="images/movies.jpg"/>
        <img src="images/music.jpg"/>
        <img src="images/food.jpg"/>
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
  