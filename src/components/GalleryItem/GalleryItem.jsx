import React from 'react';
import { useState } from "react";



// let likes = 0;
// let items = ['test thing 1','test thing 1' ];

// function LikeFunctction() {
//     // setLike = likes +=1;
//     setLikes( likes +1 );
//     console.log('liked', likes, 'times');
// }

function GalleryItem() {
    const [likes, setLikes] = useState(0); // MUST be in FUNCTION

    const LikeButton = () => {
        setLikes(likes +1);
        console.log(likes)
    }
    const UnLikeButton = () => {
        setLikes(likes -1);
        console.log(likes)
    }
    const ResetLikeButton = () => {
        setLikes(0);
        console.log(likes)
    }    
    return (
        <>

            <div id="item">
                <img src="images/biking.jpg" />
                <br></br>
                <button onClick={LikeButton}>LIKE</button>
                <button onClick={UnLikeButton}>UNLIKE</button>
                <button onClick={ResetLikeButton}>RESET</button>
                <h3># of Likes:{likes}</h3>

            </div>
              

        </>
    );
}



export default GalleryItem;