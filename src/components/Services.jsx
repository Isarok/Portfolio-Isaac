import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img from "../img/EscalandoB.png";

const services = [
  {
    nome: "Full Stack Web Development",
    desc: "He desarrollado una gran base de conocimientos y habilidades para crear aplicaciones web.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section
      className="section min-h-[75vh] lg:min-h-[40vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-2 lg:mx-auto lg:-mt-38 mt-1 max-w-full lg:max-w-[6xl]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-y-0 lg:gap-x-20">
          <div className="flex-1 text-center font-secondary md:text-right lg:text-left">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            >
              <h2 className="font-primary text-[35px] mb-6 text-violet-800 ">
                ¿Quien soy?
              </h2>
              <h3 className="h3 max-w-[455px] mb-16">
                Después de años explorando las alturas, desafiando límites en la
                escalada y haciendo tours internacionales con grandes artistas
                decidí que era hora de explorar nuevos horizontes. Es un cambio
                emocionante, estoy preparado para aplicar la misma determinación
                y pasión que he llevado a lo largo de estos años a este nuevo
                desafío.
              </h3>

              <button className="btn mb-12 rounded-full bg-[#5b21b6] px-6 py-3 transition-colors hover:text-[#5b21b6] hover:bg-transparent">
                Curiosea mis proyectos
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div>
                {services.map((item, idx) => {
                  const { nome, desc, link } = item;
                  return (
                    <div
                      key={idx}
                      className="border-b border-white/20 h-[130px] mb-4 flex gap-x-4"
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-xl -tracking-wide font-primary font-semibold">
                          {nome}
                        </h4>
                        <p className="font-secondary leading-tinght mt-2 text-gray-300">
                          {desc}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a
                          href="#"
                          className="btn w-9 h-9 flex items-center justify-center"
                        >
                          <BsArrowRight />
                        </a>
                        <a href="#" className="text-sm">
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="btn rounded-full mb-12 flex-1 max-w-[320px] lg:max-w-[480px]"
          >
            <img
              src={img}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
