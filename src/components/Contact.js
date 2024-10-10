import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="my-5">
      <h2>Contato</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
