import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                            <li><a href="#home" className="text-white">Início</a></li>
                            <li><a href="#products" className="text-white">Produtos</a></li>
                            <li><a href="#contact" className="text-white">Contato</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contato</h5>
                        <p>Email: contato@pioneira.com</p>
                        <p>Telefone: +55 (38) 1234-5678</p>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <p className="mb-0">&copy; 2024 Pioneira. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
