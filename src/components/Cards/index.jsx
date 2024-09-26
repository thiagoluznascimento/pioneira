import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { products } from "../../data/products";

function Cards() {

    return(
        <Container className="p-3">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((product, idx) => (
                <Col key={idx} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={product.image} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "200px" }} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            <Button size="sm" variant="success" className="ms-3">
                                Comprar
                                <Link to="/" className="text-white ms-1">
                                    <i className="bi bi-whatsapp"></i>
                                </Link>
                            </Button>
                            <Button size="sm" variant="success" className="ms-3">
                                Ver mais
                                <Link to="/" className="text-white ms-1">
                                    <i className="bi bi-eye"></i>
                                </Link>                                
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Cards;

