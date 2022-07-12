import GalleryItem from '../GalleryItem/GalleryItem';
import { useState } from 'react';

function GalleryListFunction ({
    galleryListPropLeft 
    // must be same name as left SIDE of PROP from App.jsx
}) {
    console.log('SENDING PROP to GalleryListFunction', galleryListPropLeft)// this console.log/handshake works



    return (
        <>
        
        <h4> GalleryList TEST</h4>
        <div>
           
            {/* {galleryListPropLeft.map((galleryItem) => {
                return <li key={galleryItem.id}>{galleryItem.thing}'s pic is here: {galleryItem.link}</li>;                     
                })} */}

                {/* // this takes in the PROP from app.jsx.
                //.MAP(galleryItemTaco) then loops through it
                // prints it once for each index/iteration from 'galleryListPropLeft' */}
   {galleryListPropLeft.map(galleryItemTaco => (
        <GalleryItem 
        // all react loops need unique 'keys'
        // easy to use .id if the array/item/db has it.
        key={galleryItemTaco.id}
        galleryItem={galleryItemTaco}
        // Again, whatever is on the LEFT side of the PROP
            //will have to go into the FUNCTION(GalleryItem)
                // so LEFT side of PROP goes to RIGHT side of FUNCTION
        
        />
   ))}


        </div>
            <GalleryItem 
            galleryItem={galleryListPropLeft[0]
            
            }
            />
           
            {/* <GalleryItem 
            galleryItem={galleryListPropLeft[1]}
            /> */}
           
            {/* key={galleryItem.id}
            galleryItem={galleryItem} */}
           
        </>
    );
}


export default GalleryListFunction;


 {/* {JSON.stringify(GalleryObjects)} */}
            {/* <p>{galleryListPropLeft[0].thing} is thing, picture:{galleryListPropLeft[0].link}</p>  */}