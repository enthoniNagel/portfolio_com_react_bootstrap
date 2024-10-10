import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <p>Siga-me nas redes sociais:</p>
        <a href="https://github.com/enthoniNagel" className="text-light mx-2">GitHub</a>
        <a href="https://www.linkedin.com/in/enthoni-s-nagel-818754288/" className="text-light mx-2">LinkedIn</a>
      </Container>
    </footer>
  );
}

export default Footer;
