import {useState } from 'react';

function GalleryListFunction (){

    const [GalleryList, setGalleryList] = useState ([
        {thing: 'biking',
        link: 'images/biking.jpg'},
        {thing: 'car',
        link: 'images/car.jpg'},
        {thing: 'coffee',
        link: 'images/coffee.jpg'},
        {thing: 'friends',
        link: 'images/friends.jpg'},
        {thing: 'internet',
        link: 'images/internet.jpg'},
        {thing: 'movies',
        link: 'images/movies.jpg'},
        {thing: 'music',
        link: 'images/music.jpg'},
        {thing: 'food',
        link: 'images/food.jpg'},
        {thing: 'running', 
        link: 'images/running.jpg'},
        {thing: 'streaming',
        link: 'images/streaming.jpg'},
        {thing: 'travel',
        link: 'images/travel.jpg'},
    ]);

    return (
        <>

        <h4> GalleryList TEST</h4>
        <div>
            {/* {JSON.stringify(GalleryObjects)} */}
            {/* <p>{GalleryObjects[0].thing} is thing, picture:{GalleryObjects[0].link}</p>  */}
            {
                GalleryList.map((items) => {
                    return <li key={items.name}>{items.thing}'s pic is here: {items.link}</li>;                     
                   
                })
            }
        </div>

        </>
    );
}


export default GalleryListFunction;