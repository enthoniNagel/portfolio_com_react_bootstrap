import React, { useState } from 'react';
import { Button, Modal, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css'; 

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Chuck Norris API',
      description: 'Projeto que consome uma API para gerar piadas aleatórias.',
      githubLink: 'https://github.com/enthoniNagel/Chuck_Norris',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Jogo da velha desenvolvido com React.',
      githubLink: 'https://github.com/enthoniNagel/tic-tac-toe',
    },
    {
      title: 'API de Filmes',
      description: 'Projeto de consumo de API de filmes feito no Senac.',
      githubLink: 'https://github.com/enthoniNagel/Questao-1-API-de-Filmes-ADS-Senac',
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Container>
      <h2>Projetos</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="project-card" onClick={() => handleShow(project)}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.githubLink} target="_blank">
                  Ver no GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedProject && (
        <Modal
          show={showModal}
          onHide={handleClose}
          dialogClassName="custom-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Projects;
