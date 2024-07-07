import React from 'react';
import ImageGallery from 'react-image-gallery';


function GalleryPage(){

    const images = [
        {
            original: '/../../images/8-bit-breadboard-computer.jpg',
            thumbnail: '/../../images/8-bit-breadboard-computer.jpg',
            description: 'An 8-bit computer built with breadboards and jumper wire connecting the digital logic chips.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/alps-laplagne-france.jpg',
            thumbnail: '/../../images/alps-laplagne-france.jpg',
            description: 'A picture of the alps in France seen from the top of a mountain called La Plagne at 3000 metres above sea level.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/deepdish-pizza-chicago.jpg',
            thumbnail: '/../../images/deepdish-pizza-chicago.jpg',
            description: 'A deep dish pizza from a restaurant in Chicago.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/housing-dot-plot-matplotlib.png',
            thumbnail: '/../../images/housing-dot-plot-matplotlib.png',
            description: 'Several plots showing a sample of 2020 housing prices in Toronto plotted against square footage, bedrooms, bathrooms, lot size, garage spaces and parking spots. Prices appear to be positively correlated with several of these variables.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/chess-pygame-code.png',
            thumbnail: '/../../images/chess-pygame-code.png',
            description: 'An image of a computer generated game of chess which was built with PyGame and the code running this game in the background.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/vietnam-tunnel-war.jpg',
            thumbnail: '/../../images/vietnam-tunnel-war.jpg',
            description: 'During the Vietnam war, tunnels like the one depicted in this image were used by Vietnamese soldiers.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/royal-thomson-hall-toronto.jpg',
            thumbnail: '/../../images/royal-thomson-hall-toronto.jpg',
            description: 'The Royal Thomson Hall concert hall in Toronto. This oval-shaped hall is mainly used for symphony orchestras.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/burger-bun-egg.jpg',
            thumbnail: '/../../images/burger-bun-egg.jpg',
            description: 'A regular burger with a runny fried egg inside. Traditionally a French practice.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/roadbike-black-dropbars.jpg',
            thumbnail: '/../../images/roadbike-black-dropbars.jpg',
            description: 'A black road bike leaning against a table in a public park.',
            originalHeight: '450px'
        },
        {
            original: '/../../images/black-labrador-dog-sunglasses.jpg',
            thumbnail: '/../../images/black-labrador-dog-sunglasses.jpg',
            description: 'A picture of a black Labrador looking cool in black sunglasses.',
            originalHeight: '450px'
        }
    ];

    return (
        <>
        <h2>Gallery</h2> 
        <article className="gallery">
            <ImageGallery items={images} />
        </article>
        </>
    );
}

export default GalleryPage