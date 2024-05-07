import React, { useState } from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import image1 from "./../../assets/imagenes_favorites/imagen1.jpg"
import image2 from "./../../assets/imagenes_favorites/imagen2.jpg"
import image3 from "./../../assets/imagenes_favorites/imagen3.jpg"
import image4 from "./../../assets/imagenes_favorites/imagen4.jpg"
import image5 from "./../../assets/imagenes_favorites/imagen5.jpg"
import image6 from "./../../assets/imagenes_favorites/imagen6.jpg"
import image7 from "./../../assets/imagenes_favorites/imagen7.jpg"
import image8 from "./../../assets/imagenes_favorites/imagen8.jpg"

export const HomeFavorites = () => {
    const cards = [
        {
            image: image1,
            alt: 'First slide',
            description: 'Luce encantadora con tu labial'
        },
        {
            image: image2,
            alt: 'Second slide',
            description: 'Que tu aroma sea tan encantadora con tú'
        },
        {
            image: image3,
            alt: 'Third slide',
            description: 'Luce encantadora con tu duo de labial'
        },
        {
            image: image4,
            alt: 'Fourth slide',
            description: 'Dale a tu piel una noche de descanso'
        },
        {
            image: image5,
            alt: 'Fiveth slide',
            description: 'Luce encantadora con tu labial'
        },
        {
            image: image6,
            alt: 'Sixth slide',
            description: 'Refresca tu piel'
        },
        {
            image: image7,
            alt: 'Seventh slide',
            description: 'Renueva tu belleza'
        },
        {
            image: image8,
            alt: 'Eighth slide',
            description: 'Luce encantadora con tu kit de playa'
        },
        // Add more images to the array
    ];


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    /** 
     * busco renderizar 4 imagenes por slide del carusel; para eso creo una matriz de arrays
     * de 4 elementos cada uno
     * */
    const chunkSize = 4;
    const chunkedCards = Array.from({ length: Math.ceil(cards.length / chunkSize) }, (_, i) => {
        return cards.slice(i * chunkSize, (i + 1) * chunkSize);
    });

    return (
        <Container fluid className="px-0">
            <Carousel activeIndex={index} onSelect={handleSelect} className="mb-5" indicators={false}>
                {chunkedCards.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <Container className="d-flex justify-content-center">
                            {chunk.map((card, cardIndex) => (
                                <Card key={cardIndex} className="col-md-3 col-sm-4 col-6 m-2">
                                    <Card.Img variant="top" src={card.image} className="card-img-top" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="mb-3">{card.description}</Card.Title>
                                        <Card.Text className="flex-grow-1">{card.description}</Card.Text>
                                        <Button className="mt-auto rose-gold ">
                                            Agregar al carrito
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Container>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );

    /**
     * importo los componentes Carrusel, card y Button desde react-bootstrap.
Defino un componente CardCarousel que utiliza el hook useState para realizar un seguimiento del índice activo del carrusel.
Defino una matriz de tarjetas que contiene los datos de cada tarjeta en el carrusel. 
Cada tarjeta tiene un título, una descripción y una propiedad de imagen.
Dentro de cada componente Carousel.Item, representamos un componente Card que contiene un componente Card.Img para la imagen, un componente Card.Body para el título y la descripción, y un componente Button para la llamada a la acción.
     */

}

