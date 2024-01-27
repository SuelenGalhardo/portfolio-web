import React from 'react';
import suelenLogo from '../assets/logosuelen.png'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import git from '../assets/git.svg';
import linkedin from '../assets/linkedin.svg';





const Header =() =>{
    
        return (
          <>
           <header>
  <div className="container">
  <Navbar expand="lg" className="" sticky='top'>
      <Container>
      <Navbar.Brand href="https://github.com/SuelenGalhardo"><img src={suelenLogo} className='logo__suelen' alt="logo Suelen" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre mí</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="https://1drv.ms/b/s!Ao5q2pSOnDnTg51d0WVMuzVvIekr3w?e=csTerI" target='_blank'>CV</Nav.Link>
            
          </Nav>
           <Nav style={{gap:'1rem', alignItems:'center'}}>
                   <a href="https://github.com/SuelenGalhardo" target='_blank' > <img className='icon' src={git} alt='git' ></img></a>
                   <a href="https://www.linkedin.com/in/suelen-galhardo-12422931/" target='_blank'><img className='icon'  src={linkedin} alt='linkedin'></img></a> 
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
     </header>
  
     </> 
          
        );
      };
      
      export default Header;
