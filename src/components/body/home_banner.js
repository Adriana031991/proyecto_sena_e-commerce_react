import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./../../assets/imagenes_marketplace/imagen_1.jpeg"
import image2 from "./../../assets/imagenes_marketplace/imagen_2.jpeg"
import image3 from "./../../assets/imagenes_marketplace/imagen_3.jpeg"
import image4 from "./../../assets/imagenes_marketplace/imagen_4.jpeg"
import image5 from "./../../assets/imagenes_marketplace/imagen_5.jpeg"

export const HomeBanner = () => {


    const images = [
        {
            src: image1,
            alt: 'First slide',
        },
        {
            src: image2,
            alt: 'Second slide',
        },
        {
            src: image3,
            alt: 'Second slide',
        },
        {
            src: image4,
            alt: 'Second slide',
        },
        {
            src: image5,
            alt: 'Second slide',
        },
        // Add more images to the array
    ];


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} >

                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="d-block w-100 carousel-image"
                            style={{ height: 300, objectFit: 'cover' }}
                        />
                        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                            <h3 >Nuevas Experiencias</h3>
                            <p >Mira, Observa, Comprueba, elige el que más te guste.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>

        </div>

    );
}
