import {useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryListFunction ({
    galleryListPropLeft 
    // must be same name as left SIDE of PROP from App.jsx
}) {
    console.log('SENDING PROP to GalleryListFunction', galleryListPropLeft)// this console.log/handshake works



    return (
        <>
        
        <h4> GalleryList TEST</h4>
        <div>
           
            {galleryListPropLeft.map((items) => {
                return <li key={items.id}>{items.thing}'s pic is here: {items.link}</li>;                     
                })}
        </div>
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
        </>
    );
}


export default GalleryListFunction;


 {/* {JSON.stringify(GalleryObjects)} */}
            {/* <p>{galleryListPropLeft[0].thing} is thing, picture:{galleryListPropLeft[0].link}</p>  */}