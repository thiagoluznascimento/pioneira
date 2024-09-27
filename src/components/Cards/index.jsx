import { Card, Row, Col, Container, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { products } from "../../data/products";
import { useState } from "react";

function Cards(props) {

    const [texto, setTexto] = useState([]);  //useState é o Hook -> ele retorna um par de valores
    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleShow = (product) => {
        setSelectedProduct(product); // Para armazenar o produto selecionado
        setModalShow(true); //Para mostrar modal
    }

    return(
        <Container className="p-3">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((product, idx) => (
                <Col key={idx} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={product.image} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "200px" }} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {texto[idx]
                                        ? product.description
                                        : `${product.description.substring(0, 50)}...`
                                    }
                                </Card.Text>
                            <Button size="sm" variant="success" className="ms-3">
                                Comprar
                                <Link to="/" className="text-white ms-1">
                                    <i className="bi bi-whatsapp"></i>
                                </Link>
                            </Button>
                            <Button size="sm" variant="success" className="ms-3" onClick={() => handleShow(product)}>
                                Ver mais

                                <Link to="" className="text-white ms-1">
                                    <i className="bi bi-eye"></i>
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

            {/* lembrar que sempre o modal tem que ser fora do loop */}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {selectedProduct ? selectedProduct.title : ''} {/* Título do produto selecionado */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct &&(
                    <>
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" style={{ objectFit: "cover", width: "100%", height: "400px" }} />
                    <p>{selectedProduct ? selectedProduct.description : ''} {/* Descrição do produto selecionado */}</p>
                    </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setModalShow(false)}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Cards;