import React, { useState } from 'react';
import perfilImg from '../assets/images/perfil.png';
import { Modal, Button } from 'react-bootstrap';
import './About.css'; 

const secretSound = new Audio('/sounds/programador-nao-e-madre-tereza.mp3');
const aboutSound = new Audio('/sounds/sou-obrigado-a-falar-que-esse-programa-ta-uma-porra.mp3');

function About() {
  const [show, setShow] = useState(false); 
  const [secretButtonState, setSecretButtonState] = useState(0); 

  const handleClose = () => setShow(false);
  const handleShow = () => {
    aboutSound.play().catch((error) => {
      console.log("Erro ao tentar reproduzir o som:", error);
    });
    setShow(true);
  };

  const moveSecretButton = (button) => {
    setSecretButtonState((prevState) => (prevState + 1) % 8); 

    const translations = [
      "translate(95px, 0)", 
      "translate(130px, -150px)", 
      "translate(130px, 150px)", 
      "translate(-325px, 150px)", 
      "translate(-325px, -150px)", 
      "translate(135px, 150px)", 
      "translate(135px, -150px)", 
      "translate(-325px, 150px)", 
      "translate(-325px, -150px)", 
    ];

    button.style.transform = translations[secretButtonState];
  };

  const handleMouseEnter = (e) => {
    const button = e.target;
    const intervalId = setInterval(() => moveSecretButton(button), 200); 
    button.onmouseleave = () => {
      clearInterval(intervalId); 
      button.style.transform = 'translate(0, 0)'; 
      button.onmouseleave = null; 
    };
  };

  const handleSecretButtonClick = () => {
    secretSound.play().catch((error) => {
      console.log("Erro ao tentar reproduzir o som:", error);
    });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center mb-3">
        <Button variant="primary" onClick={handleShow} className="btn-hover mb-2">
          Pressione para saber mais "Sobre mim"
        </Button>
        <Button 
          className="secret-button"
          onMouseEnter={handleMouseEnter}
          onClick={handleSecretButtonClick} 
        >
          Quer saber um segredo?
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>"Sobre mim"</Modal.Title>
        </Modal.Header>
        <Modal.Body className="about-section text-center">
          <img src={perfilImg} alt="Perfil Enthoni S. Nagel" className="perfil-img mb-3" />
          <div className="about-text">
            <h5>Olá, Mundo!</h5>
            <p>👨‍💻 <strong>Nome:</strong> Enthoni S. Nagel</p>
            <p>🌍 <strong>De:</strong> Brasil</p>
            <p>🛠️ <strong>Stack favorita:</strong> Café ☕ + Correções de bugs 🔧</p>
            <p>🐛 <strong>Corrigindo bugs desde:</strong> "Por que isso está quebrando?"</p>
            <p>🌱 <strong>Habilidades em crescimento:</strong> Ctrl + C, Ctrl + V</p>
            <p>🤔 <strong>Pensamento atual:</strong> "Se funciona, por que mexer?"</p>
            <p>💡 <strong>Dica profissional:</strong> Se você não consegue corrigir, chame de "recurso".</p>
            <p>🎯 <strong>Meta de vida:</strong> Fazer o código funcionar na primeira tentativa. (Ainda esperando por essa).</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;
