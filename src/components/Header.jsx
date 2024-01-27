//import { useState } from 'react';
import suelenLogo from '../assets/logosuelen.png'
import Nav from 'react-bootstrap/Nav';

const Header =() =>{
    
        return (
          <>
           <header>
  <div className="container">
          
         
                
     
  <nav className="navbar navbar-expand-lg navbar-light">

  <a className="navbar-brand" href="https://github.com/SuelenGalhardo" target='blank'> <img src={suelenLogo} className="logo__suelen" alt="suelen logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
        <a className="nav-link" href="#">Sobre mí<span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Proyectos <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
      </li>
     </ul>
  </div>
</nav>

</div>   
     </header>
     </> 
          
        );
      };
      
      export default Header;
