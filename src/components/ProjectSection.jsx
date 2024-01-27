import githubLogo from '../assests/githubw.svg';
import globeWeb from '../assets/globe-solid.svg';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import { useState } from 'react';

const ProjectSection = ({ projects, hiddenClassProjects }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const [currentProjects, setCurrentProjects] = useState(projects.slice(0, 3));
  const [displayArrowR, setDisplayArrowR] = useState('');
  const [displayArrowL, setDisplayArrowL] = useState('hiddenArrow');

  const handlePrev = (ev) => {
    console.log(currentPage);
    ev.preventDefault();
    if (currentPage > 1) {
      setDisplayArrowR('');
      const endIndex = (currentPage - 1) * projectsPerPage;
      const startIndex = endIndex - projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
      if (currentPage < 3) {
        setDisplayArrowL('hiddenArrow');
      }
      return currentProjects;
    }
  };

  const handleNext = (ev) => {
    ev.preventDefault();
    if (currentProjects.length >= 3) {
      setDisplayArrowL('');
      const startIndex = currentPage * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage + 1);
      if (currentPage >= 2) {
        setDisplayArrowR('hiddenArrow');
      }
      return currentProjects;
    }
  };

  // Render the list of the current projects
  const projectLi = currentProjects.map((project) => {
    return (

      <li key={project.id} className="projects__container">
         <img className= "" src={project.img}/>
        <p className="projects__container__title">{project.projectName}</p>
      </li>
      <div className="containerLogos">
      <a
        href={project.link}
        className="linkProject"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="containerLogos__item globe"
          src={globeWeb}
          alt="github logo"
        />
      </a>
      <a
        href={project.github}
        className="linkGuthubPtoject"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="containerLogos__item github"
          src={githubLogo}
          alt="github logo"
        />
      </a>
    </div>
    );
  });

  return (
    <section className={`projectSection ${hiddenClassProjects}`}>
      <h3 className="projectSection__title">Proyectos</h3>
      <p>{description}</p>

      <section className="projectSection__container">
        <button
          className={`pagination__btn ${displayArrowL}`}
          onClick={handlePrev}
        >
          <img
            className="pagination__btn__img"
            src={arrowLeft}
            alt="arrow-right"
          />
        </button>
        <ul className="projects">{projectLi}</ul>
        <button
          className={`pagination__btn ${displayArrowR}`}
          onClick={handleNext}
        >
          <img
            className="pagination__btn__img--next"
            src={arrowRight}
            alt="arrow left"
          />
        </button>
        <span className="currentPage">Page {currentPage}</span>
      </section>
      {/*<Pagination />*/}
      <form action="back" className="pagination">
        {/*<button className={`pagination__btn ${displayArrowL}`} onClick={handlePrev}><img className="pagination__btn__img" src={arrowLeft} alt="arrow-right" />
          </button>
          <button className={`pagination__btn ${displayArrowR}`} onClick={handleNext}>
            <img className="pagination__btn__img--next" src={arrowRight} alt="arrow left" />
          </button>*/}
      </form>
    </section>
  );
};

export default ProjectSection;