import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../components/Button';

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zzuuy9', 'template_qj6yf91', e.target, 'h5YO5i7FXtb4ZRiiS')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="w-[90%] m-auto mt-20 sm:w-[40%] md:w-[60%] lg:w-[60%] xl:w-[70%] 2xl:w-[40%] p-5 sm:p-10 shadow-xl bg-[#26292d] flex flex-col justify-center items-center rounded-xl" id="contacto">
      <h2 className="text-white text-center text-2xl sm:text-4xl font-semibold mb-5">Hablemos</h2>
      <form className="flex flex-col justify-center items-center" onSubmit={sendEmail}>

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22] border-sky-100" type="text" name="user_name" placeholder="Nombre" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="email" name="user_email" placeholder="Correo" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" type="tel" name="user_phone" placeholder="Teléfono" required />

        <input className="w-full sm:w-[180%] p-3 m-2 text-lg rounded-2xl bg-[#1C1E22]" name="user_message" id="" placeholder="Asunto" required />

        <Button type="submit" className="w-36 mt-5">Enviar</Button>

      </form>

      {isEmailSent && <p className="text-white mt-4">¡El correo electrónico se envió correctamente!</p>}
    </section>
  );
}

export default Contact;
