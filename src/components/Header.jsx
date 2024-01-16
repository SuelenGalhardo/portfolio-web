//import { useState } from 'react';
import suelenLogo from '../assets/logosuelen.png'
import Nav from 'react-bootstrap/Nav';

const Header =() =>{
    
        return (
          <>
           <header>
  <div className="container">
  <a href="https://github.com/SuelenGalhardo" target="_blank">
          <img src={suelenLogo} className="logo__suelen" alt="suelen logo" />
                  </a>

                  <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Contacto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" eventKey="link-1">CV</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/home" eventKey="disabled" disabled>
          Linkedin/logo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/home" eventKey="disabled" disabled>
          Github/logo
        </Nav.Link>
      </Nav.Item>
    </Nav>        

</div>   
     </header>
     </> 
          
        );
      };
      
      export default Header;
