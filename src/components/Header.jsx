//import React from 'react';
import suelenLogo from '../assets/logosuelen.png'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header =() =>{
    
        return (
          <>
           <header>
  <div className="container">
            <Navbar fixed='top' bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="https://github.com/SuelenGalhardo"><img src={suelenLogo} className='logo__suelen' alt="logo Suelen" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Sobre mí</Nav.Link>
            <Nav.Link href="#features">Proyectos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
</div>   
     </header>
     </> 
          
        );
      };
      
      export default Header;
