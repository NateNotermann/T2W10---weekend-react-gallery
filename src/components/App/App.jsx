import React, { useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

// GalleryListFunction pulls in the GalleryList from the router
import GalleryListFunction from '../GalleryList/GalleryList';
import {useState} from "react";
import Header from './Header/Header';
import axios from 'axios';





function App() {

  // 'gallerList' will eventually hold the 'state' of the GalleryList
  const [galleryList, setGalleryList] =useState([]);

// useEffect' is ON-PAGE-LOAD do this thing
    // the thing is run fetchGalleryList() FUNCTION
        //and console log to test
useEffect(() => {
  fetchGalleryList();
    console.log('handshake test fetchGallery');
}, [] ); // ON initial PAGE-LOAD it is an empty string

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
   
        {/* // send array of images to GalleryList COMPONENT
        //Loop through array and redner each one as a GalleryItem
        // GalleryItem will render the image, handle clicks, tcs */}

        <GalleryListFunction 
        galleryListPropLeft={galleryList}
        // Whatever is on the LEFT side of the prop
            // Will have to go into the FUNCTION(galleryListPropLeft) in the corresponding component  
        // galleryListPropLeft is a TACO
        // {galleryList} is NOT a taco. IT is being pull from the useState above in .App  
        />
        <Header 
        taco= 'yes'
        title= 'Hello World!'
        />

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
  