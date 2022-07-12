import React from 'react';
import { useState } from 'react';



// let likes = 0;
// let items = ['test thing 1','test thing 1' ];

// function LikeFunctction() {
//     // setLike = likes +=1;
//     setLikes( likes +1 );
//     console.log('liked', likes, 'times');
// }

function GalleryItem({
    //galleryItem
    galleryItem
}) {

    const [isInImageMode, setIsInImageMode] = useState(true);

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


    console.log('galleryItem is:', galleryItem,)
    return (
        <>

            {/* <div id="item"> */}
                {/* <img src="images/biking.jpg" /> */}
                {/* <br></br> */}
            <li>
                <div>
                    <div onClick={() => setIsInImageMode(!isInImageMode)}>
                    {isInImageMode ?
                    <h3>isInImageMode</h3>
                    :
                    <h3>NOT isInImageMode</h3>
                    }</div>

                    {/* THESE THREE LINES BREAK THE APP */}    
                    <img src={galleryItem.link} />
                    <div>{galleryItem.description}</div>
                    <div>REAL number of Likes: {galleryItem.likes}</div>
                    {/* THESE THREE LINES BREAK THE APP */}  

                    <button onClick={LikeButton}>LIKE</button>
                    <button onClick={UnLikeButton}>UNLIKE</button>
                    <button onClick={ResetLikeButton}>RESET</button>
                    <h3># of Likes:{likes}</h3>
                    {/* {/ TODO No people like this, if 0 likes  */}
                </div>
             </li>
            {/* </div> */}
              

        </>
    );
}



export default GalleryItem;