import React from 'react';
import yo from "../assets/me/yo.jpg";
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Presentation = () => {
  return (
    <div className='flex flex-col md:flex-row' id='inicio'>
      <div className='w-full md:w-1/2 p-4 md:p-20 flex flex-col justify-center items-center md:items-start'>
        <h3 className='text-white text-2xl md:text-3xl font-semibold text-center md:text-left'>
          Backend developer <strong className='text-yellow'>javascript</strong>
        </h3>
        <h1 className='text-white text-4xl md:text-5xl font-semibold mt-4 text-center md:text-left'>
          Nicolas Caliari
        </h1>
        <Button>Descargar cv</Button>
        <a className='flecha mt-4 md:mt-10 text-center md:text-left' href='#proyectos'>
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </div>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-20'>
        <img className='w-48 md:w-80 rounded-xl' src={yo} alt="pepe" />
        <p className='text-white font-normal text-base md:text-xl mt-4 md:mt-10 text-left md:text-left'>
          Hola! Soy Nicolas Caliari. Tengo 21 años y vivo en Buenos Aires Argentina.
          Actualmente me encuentro estudiando en la Universidad Tecnológica Nacional la
          carrera de Tecnicatura Universitaria en Sistemas Informáticos. Me encuentro en búsqueda laboral
          para Full stack React Native, Node, Typescript o desarrollo con .NET.
          Tengo varios proyectos realizados, algunos son proyectos para la universidad y otros son de trabajos freelancer.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
