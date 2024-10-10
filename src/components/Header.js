import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header({ handleHighlight }) {
  const [activeLink, setActiveLink] = useState('sobre');

  const handleSetActive = (link) => {
    setActiveLink(link);
    handleHighlight(link); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Enthoni S. Nagel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link 
              as={Link} 
              to="about" 
              smooth={true} 
              duration={500} 
              className={activeLink === 'sobre' ? 'active' : ''} 
              onClick={() => handleSetActive('about')}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="projects" 
              smooth={true} 
              duration={500} 
              className={activeLink === 'projetos' ? 'active' : ''} 
              onClick={() => handleSetActive('projects')}
            >
              Projetos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="contact" 
              smooth={true} 
              duration={500} 
              className={activeLink === 'contato' ? 'active' : ''} 
              onClick={() => handleSetActive('contact')}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
