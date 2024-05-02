import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-cyan-400 font-medium mb-6 tracking-wide">
                Contacto
              </h4>
              <h2 className="text-2xl lg:text-6xl leading-none mb-8 ">
                Trabajemos juntos
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mt-0 mt-8 border rounded-2xl flex flex-col gap-y-5 pb-28 p-8 items-start "
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
              placeholder="Nombre"
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
              placeholder="Email"
            />

            <textarea
              cols="30"
              rows="3"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300 resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>

            <button className="btn btn-lg rounded-full bg-[#12eff7] px-6 py-3 transition-colors hover:text-[#12eff7] hover:bg-transparent">
              Enviar
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
