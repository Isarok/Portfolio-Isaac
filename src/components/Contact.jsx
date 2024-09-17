import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { sendEmail } from '../utils/emailService';
import { toast, ToastContainer, Zoom } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    const name = form.current['user_name'].value.trim();
    const email = form.current['user_email'].value.trim();
    const message = form.current['message'].value.trim();

    if (!name || !email) {
      toast.error("Por favor, complete todos los campos obligatorios.", {
        position: "top-center",
        className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-cyan-400 text-left",
        theme: "dark",
        transition: Zoom,
      });
      return;
    }

    // Enviar el email
    sendEmail(form)
      .then(() => {
        toast("Email enviado 🚀, gracias por contactar conmigo!", {
          position: "top-center",
          className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-white text-left",
          theme: "dark",
          transition: Zoom,
        });
        form.current.reset(); // Resetea el formulario después de enviar
      })
      .catch((error) => {
        toast.error("Error al enviar el email. Inténtalo de nuevo más tarde.", {
          position: "top-center",
          className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-cyan-400 text-left",
          theme: "dark",
          transition: Zoom,
        });
        console.error('Error sending email:', error);
      });
  };

  return (
    <section
      className="flex items-center justify-center max-w-[340px] mx-auto py-[20vh]
                md:max-w-[600px] md:py-[30vh]
                lg:max-w-[400px] lg:py-[20vh]
                xl:max-w-[800px] xl:min-h-[60vh]
                2xl:max-w-[1200px] "
                id="contact"
    >
      <div className="mx-auto">
        <div className="flex flex-col 
                        lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className='md:pl-6'>
              <h4 className="text-lg uppercase text-cyan-400 font-medium mb-6 tracking-wide
                            md:text-3xl 
                            lg:text-3xl">
                Contacto :
              </h4>
              <h2 className="text-2xl leading-none font-semibold
                             md:text-3xl 
                             lg:text-5xl 
                             2xl:text-6xl ">
                Trabajemos juntos
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mt-0 mt-8 border rounded-2xl flex flex-col gap-y-4 pb-20 p-6 items-start border-[#12eff7]  border-t-4 border-r-4 text-white"
          >
            <form className="bg-opacity-full w-full
                             md:text-xl" 
                  ref={form} onSubmit={handleSubmit}>
              <label htmlFor="name" id='name'>Nombre completo <span className="text-cyan-500">*</span></label>
              <input
                type="text"
                name="user_name"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
                required
              />

              <label htmlFor="email">Email <span className="text-cyan-500">*</span></label>
              <input
                type="email"
                name="user_email"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
                required
              />

              <label htmlFor="message">Su mensaje </label>
              <textarea
                name="message"
                cols="30"
                rows="2"
                className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300 resize-none"
              ></textarea>

              <span className="btn relative w-full mt-4">
                  <span className="animate-background" />
                   <div
                    className="inline-flex w-full items-center justify-center cursor-pointer rounded-md bg-[#123] px-16 py-3 text-md font-medium text-gray-50 backdrop-blur-3xl
                               lg:px-48
                               2xl:text-xl 2xl:px-64 "
                   >
                     <a
                       href="https://mail.google.com/mail/?view=cm&fs=1&to=isaacfstack@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-50"
                     >
                      <button className='hover:text-cyan-400'>Enviar</button>
                     </a>
                  </div>
              </span>
              <ToastContainer />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
