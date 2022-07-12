import {useState } from 'react';

function GalleryListFunction (){

    const [GalleryList, setGalleryList] = useState ([
        {id: '1',
        thing: 'biking',
        link: 'images/biking.jpg',
        likes: 0},
        {id: '2',
        thing: 'car',
        link: 'images/car.jpg',
        likes: 0},
        // {id: '3',
        // thing: 'coffee',
        // link: 'images/coffee.jpg',
        // likes: 0},
        // {id: '4',
        // thing: 'friends',
        // link: '<img src="images/friends.jpg"'},
        // {id: '5',
        // thing: 'internet',
        // link: '<img src="images/internet.jpg"'},
        // {id: '6',
        // thing: 'movies',
        // link: '<img src="images/movies.jpg"'},
        // {id: '7',
        // thing: 'music',
        // link: '<img src="images/music.jpg"'},
        // {id: '8',
        // thing: 'food',
        // link: '<img src="images/food.jpg"'},
        // {id: '9',
        // thing: 'running', 
        // link: '<img src="images/running.jpg"'},
        // {id: '10',
        // thing: 'streaming',
        // link: '<img src="images/streaming.jpg"'},
        // {id: '11',
        // thing: 'travel',
        // link: '<img src="images/travel.jpg"'},
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