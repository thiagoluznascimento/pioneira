import { Card, Row, Col, Container } from "react-bootstrap";
import { learnList } from "../../data/learn.js";
import '../styles.css';


function Learn() {
    return(
        <Container className="p-4">
            <h2 className="titulo-h2">Novidades</h2>
            <Row xs={1} md={2} className="g-4">
            {learnList.map((learn, idx) => (
                <Col key={idx}>
                    <Card className="h-100">
                        <div style={{ height: "350px", overflow: "hidden" }}>
                            <Card.Img variant="top" src={learn.image} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{learn.title}</Card.Title>
                            <Card.Text>{learn.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Learn;
