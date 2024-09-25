import { Card, Row, Col, Container } from "react-bootstrap";
import { products } from "../../data/products";
import '../styles.css';

function Products() {
    return (
        <Container className="p-3">
            <h2 className= "titulo-h2" >Nossos Produtos</h2>
            <Row xs={1} md={2} className="g-4">
            {products.map((product, idx) => (
                <Col key={idx}>
                    <Card>
                        <div style={{ height: "350px", overflow: "hidden" }}>
                            <Card.Img variant="top" src={product.image} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
      );
}

export default Products;

