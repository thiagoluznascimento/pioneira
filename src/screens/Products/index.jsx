import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { products } from "../../data/products";
import '../styles.css';

function Products() {
    return (
        <Container className="p-3">
            <Row xs={1} md={4} className="g-2">
            {products.map((product, idx) => (
                <Col key={idx}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "200px" }} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
      );
}

export default Products;
