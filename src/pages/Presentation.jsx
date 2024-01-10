import React from 'react';
import yo from "../assets/me/yo.jpg";
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import pdfUrl from '../assets/cv.pdf';


const Presentation = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'NICOLAS_CALIARI.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className='flex flex-col justify-center items-center h-[90vh]' id='inicio'>

      <article className='w-full md:w-[70%] flex flex-col justify-center items-start md:flex-row pt-[10px]'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-4'>
          <img className='w-48 md:w-[400px] rounded-xl' src={yo} alt="imagenMia" />
        </div>


        <div className='w-full md:w-1/2 p-4  flex flex-col justify-center items-center md:items-start'>
          <h3 className='text-white text-2xl md:text-3xl font-semibold text-center md:text-left'>
            Backend developer <strong className='text-yellow'>javascript</strong>
          </h3>
          <h1 className='text-white text-4xl md:text-6xl font-semibold mt-6 text-center md:text-left'>
            Nicolas Caliari
          </h1>
          <div className='flex items-center justify-center mt-[30px]'>
            <button className='button' onClick={handleDownload}>Descargar PDF</button>
            {/* <Button>Descargar cv</Button> */}
            <a className='flecha text-center ml-[20px]' href='#proyectos'>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </a>
          </div>

        </div>
      </article>

    </section>
  );
};

export default Presentation;
