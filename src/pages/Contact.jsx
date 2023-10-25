import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <section className="w-[90%] m-auto mt-20 sm:w-[40%] md:w-[60%] lg:w-[60%] xl:w-[70%] 2xl:w-[40%] p-5 sm:p-10 shadow-xl bg-[#26292d] flex flex-col justify-center items-center rounded-xl" id="contacto">
      <h2 className="text-white text-center text-2xl sm:text-4xl font-semibold mb-5">Hablemos</h2>
      <form className="flex flex-col justify-center items-center">

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22] border-sky-100" type="text" name="user_name" placeholder="Nombre" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="email" name="user_email" placeholder="Correo" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="tel" name="user_phone" placeholder="Teléfono" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" name="user_message" id="" placeholder="Asunto" required />

        <Button className="w-36">Enviar</Button>

      </form>
    </section>
  );
}

export default Contact;
