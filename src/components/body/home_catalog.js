import React from 'react';
import { useFetch } from '../../services/useFetch';
import { Alert, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

export const HomeCatalog = () => {
    const { data, loading, error } = useFetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    console.log(data);

    const truncateText = (text, maxWidth) => {
        if (text.length > maxWidth) {
            return text.substring(0, maxWidth) + '...';
        }
        return text;
    };

    /**
     * busco renderizar un catalogo de productos, de una ai que encontre en internet.
     * trato de organizar el catalogo mediante cards, iterandolos segun la cantidad de la respuesta
     * del fetch.
     * acorto la respuesta a 10 productos, para no traer los 931 productos que tiene la api.
     */
    return (
        <>
            <Container fluid className="home__catalog" >
                {error && <Alert variant="danger">Error: {error}</Alert>}
                {loading && <Spinner animation="grow" role="status" />}
                <Row xs={1} md={3} lg={4} className="g-4">
                    {data?.slice(0, 10).map(product => (
                        <Col key={product.id}>
                            <Card className="">
                                <Card.Img variant="top" src={product.api_featured_image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {truncateText(product.description, 100)}
                                        {product.price_sign} {product.price}
                                    </Card.Text>
                                    <Button className='rose-gold '>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

