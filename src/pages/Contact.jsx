import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className="flex flex-col h-[550px] justify-center items-center w-full m-auto  p-2 mt-10 sm:mt-20" id="contacto">
      <h2 className="text-white text-center text-2xl sm:text-4xl font-semibold mb-5">Hablemos</h2>
      <div className="w-[80%] sm:w-[30%] p-5 sm:p-10 shadow-xl bg-[#26292d] flex flex-col justify-center items-center rounded-xl">
        <form className="flex flex-col justify-center items-center">

          <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22] border-sky-100" type="text" name="user_name" placeholder="Nombre" required />

          <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="email" name="user_email" placeholder="Correo" required />

          <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="tel" name="user_phone" placeholder="Teléfono" required />

          <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" name="user_message" id="" placeholder="Asunto" required />

          <Button className="w-36">Enviar</Button>

        </form>
      </div>
    </div>
  );
}

export default Contact;
