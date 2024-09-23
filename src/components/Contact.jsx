import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { handleFormSubmit } from '../utils/emailService';  // Importar la función

const Contact = () => {
  const form = useRef();

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
        <div className="flex flex-col lg:flex-row">
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
            <form className="bg-opacity-full w-full md:text-xl" ref={form} onSubmit={handleFormSubmit(form)}>
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
                required
              ></textarea>

              <span className="btn relative w-full mt-4">
                <span className="animate-background" />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center cursor-pointer rounded-md bg-[#123] px-16 py-3 text-md font-medium text-gray-50 backdrop-blur-3xl hover:text-cyan-400 lg:px-48 2xl:text-xl 2xl:px-64"
                  >
                    Enviar
                  </button>
              </span>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
