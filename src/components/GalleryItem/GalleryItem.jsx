import React from 'react';
import { useState } from "react";



let likes = 0;
let items = ['test thing 1','test thing 1' ];


function LikeFunctction() {
    // setLike = likes +=1;
    likes += 1;
    console.log('liked', likes, 'times');
}




function GalleryItem() {

    
    return (
        <>

            <div id="item">
                <img src="images/biking.jpg" />
                <br></br>
                <button onClick={(event) => LikeFunctction()
                }>LIKE</button>
                <h3># of Likes:{likes}</h3>

            </div>
              

        </>
    );
}



export default GalleryItem;