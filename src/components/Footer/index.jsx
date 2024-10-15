import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Sobre nós</h5>
                        <p>
                            Somos uma empresa dedicada ao suporte completo para o agro no Brasil, oferecendo soluções inovadoras para o campo.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Links úteis</h5>
                        <ul className="list-unstyled">
                            <li><Link as={Link} to="/" >Início</Link></li>
                            <li><Link as={Link} to="/products" >Produtos</Link></li>
                            <li><Link as={Link} to="/contact" >Contato</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contato</h5>
                        <Link to="/" className='d-block mb-2' >
                            <i className="bi bi-whatsapp"></i> WhatsApp
                        </Link>
                        <Link to="/" className='d-block mb-2' >
                            <i className="bi bi-instagram"></i> Instagram
                        </Link>
                        <Link to="/" className='d-block mb-2'>
                            <i className="bi bi-envelope"></i> Email
                        </Link>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <p className="mb-0">&copy; 2024 Pioneiro Agronegócios.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
