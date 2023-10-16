import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useRef } from "react";
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  const refFooter = useRef()
  return (
    <div className='mt-[100px] w-[100%] h-[400px]  flex flex-col'>

      <div ref={refFooter} className='m-[20px] text-center'>
        <h2 className='text-[50px] font-[1000] text-center text-white'>Nicolas Caliari</h2>
      </div>

      <div className='m-[20px] text-center'>
        <h3 className='text-center text-white text-[30px]'>Buenos aires</h3>
      </div>

      <div className='m-[20px] text-center'>
        <h4 className='text-center text-white text-[20px]'>nicolascaliari28@gmail.com</h4>
      </div>

      <div className='m-[20px] text-center'>
        <h4 className='text-center text-white text-[20px]'>© Nicolas Caliari Theme. All Rights Reserved</h4>
      </div>

      <div className='flex flex-row m-auto bg-transparent'>
        <a
          href="https://www.linkedin.com/in/nicolas-caliari-628236236/" className='bg-transparent decoration-none cursor-pointer'>
          <i><FontAwesomeIcon className='p-[30px] text-[40px] text-white' icon={faLinkedin} /> </i>
        </a>


        <a href="https://www.instagram.com/nicolascaliari/" className='bg-transparent decoration-none cursor-pointer' >
          <i>  <FontAwesomeIcon className='p-[30px] text-[40px] text-white' icon={faInstagram} /> </i></a>



        <a href="https://github.com/nicolascaliari" className='bg-transparent decoration-none cursor-pointer'>
          <i>  <FontAwesomeIcon className='p-[30px] text-[40px] text-white' icon={faGithub} /> </i></a>
      </div>

      <a className='flecha flex justify-end p-[20px]' href='#inicio'> <FontAwesomeIcon icon={faChevronCircleUp} /></a>



    </div>

  )
};


export default Footer;