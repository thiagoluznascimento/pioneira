import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../styles.css';

function Contact() {
    return(
        <Container className="container-contact">
            <h3 className='sub-titulo-h3'>
                Obrigado por visitar a Pioneira! Estamos ansiosos para ajudá-lo(a) e responder a todas as suas dúvidas e solicitações. Se você está interessado(a) em nossos produtos e serviços ou tem alguma consulta específica, entre em contato conosco.
            </h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Escreva sua mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Contact;