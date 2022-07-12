import {useState } from 'react';

function GalleryListFunction (){

    const [GalleryList, setGalleryList] = useState ([
        {id: '1',
        thing: 'biking',
        link: 'images/biking.jpg'},
        {id: '2',
        thing: 'car',
        link: 'images/car.jpg'},
        {id: '3',
        thing: 'coffee',
        link: 'images/coffee.jpg'},
        {id: '4',
        thing: 'friends',
        link: 'images/friends.jpg'},
        {id: '5',
        thing: 'internet',
        link: 'images/internet.jpg'},
        {id: '6',
        thing: 'movies',
        link: 'images/movies.jpg'},
        {id: '7',
        thing: 'music',
        link: 'images/music.jpg'},
        {id: '8',
        thing: 'food',
        link: 'images/food.jpg'},
        {id: '9',
        thing: 'running', 
        link: 'images/running.jpg'},
        {id: '10',
        thing: 'streaming',
        link: 'images/streaming.jpg'},
        {id: '11',
        thing: 'travel',
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
                    return <li key={items.id}>{items.thing}'s pic is here: {items.link}</li>;                     
                   
                })
            }
        </div>

        </>
    );
}


export default GalleryListFunction;