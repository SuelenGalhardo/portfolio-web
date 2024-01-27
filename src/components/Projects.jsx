//import { useState } from 'react';
import Anonymous from '../assets/Anonymous.png';
import Disney_Character from '../assets/Disney.png'
import Rick_and_Morty from '../assets/Rickmorty.png'


const Projects = () => {

  const MapProjects= [
  {
    img: Anonymous,
    projectName: 'Anonymous Proxy',
    tech: ['HTML5', 'CSS3'],
    description:'Creación de una página web responsive basada en un diseño proporcionado.',
    github: 'https://github.com/Lourdesjupo/webResponsive_example',
    link: 'https://lourdesjupo.github.io/webResponsive_example/',
  },
  {
      img: Rick_and_Morty,
      projectName: 'Buscador Rick And Morty',
      tech: ['HTML5', 'SASS', 'ReactJS'],
      description:'Busca tus personajes favoritos de Rick and Morty y averigua su procedencia y otros datos interesantes.',
      github: 'https://github.com/Lourdesjupo/Rick-and-Morty-Character-Finder',
      link: 'https://lourdesjupo.github.io/Rick-and-Morty-Character-Finder/',
    
  },
   {
      img: Disney_Character,
      projectName: 'Disney Character Database',
      tech: ['HTML5', 'SASS', 'JavaScript'],
      description:'Web Responsive donde almacenar todos tus personajes favoritos de Disney. ',
      github: 'https://github.com/Lourdesjupo/Disney-Characters-Database',
      link: 'https://lourdesjupo.github.io/Disney-Characters-Database/',
   
    },
  
    
  ]





  
  
  return (
  
    <main></main>
  );
};

export default Projects;