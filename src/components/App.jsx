

import '../styles/App.scss';
//import 'bootstrap/dist/css/bootstrap.min.scss';
import Header from './Header';
//import Main from './Main';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
//import { useState, } from 'react'
import Anonymous from '../assets/Anonymous.png';
import Disney_Character from '../assets/Disney.png'
import Rick_and_Morty from '../assets/Rickmorty.png'
//import { useState, useRef, useState } from 'react'

/* The following line can be included in your src/index.js or App.js file */
//import './App.scss';


const arrayProjects= [
  {
    id:1,
    img: Anonymous,
    projectName: 'Anonymous Proxy',
    tech: ['HTML5', 'CSS3'],
    description:'Creación de una página web responsive basada en un diseño proporcionado.',
    github: 'https://github.com/SuelenGalhardo/Anonymous-HTML-CSS',
    link: 'https://beta.adalab.es/modulo-1-evaluacion-final-SuelenGalhardo/',
  },
  {
      id:2,
      img: Rick_and_Morty,
      projectName: 'Buscador Rick And Morty',
      tech: ['HTML5', 'SASS', 'ReactJS'],
      description:'Busca tus personajes favoritos de Rick and Morty y averigua su procedencia y otros datos interesantes.',
      github: 'https://github.com/SuelenGalhardo/Rick-and-Morty',
      link: 'https://suelengalhardo.github.io/Rick-and-Morty/',
    
  },
   {  id:3,
      img: Disney_Character,
      projectName: 'Disney Character Database',
      tech: ['HTML5', 'SASS', 'JavaScript'],
      description:'Web Responsive donde almacenar todos tus personajes favoritos de Disney. ',
      github: 'https://github.com/SuelenGalhardo/Disney-Character-Database',
      link: 'https://suelengalhardo.github.io/Disney-Character-Database/',
   
    },
  
    
  ]

function App() {
  

  return (
<>


        <Header/>
      
        <ProjectSection
        arrayProjects={arrayProjects}
        />    


       
    
       <Footer/>

</>
    )
    }
export default App
