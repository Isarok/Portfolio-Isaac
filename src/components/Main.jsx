import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import img from "../img/perfil1.png";
const Main = () => {
  return (
    <section
      className="section min-h-[75vh] lg:min-h-[40vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-4 lg:mx-auto lg:-mt-38 mt-4 max-w-full lg:max-w-[6xl]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-y-0 lg:gap-x-22">
          <div className="flex-1 text-center font-secondary md:text-left lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 text-2xl font-bold leading-[0.8] text-[12px]"
            >
              ISAAC <span>GARCIA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-2 font-primary text-[12px] lg:text-[25px] uppercase leading-[1] font-semibold"
            >
              <span className="">
                Soy <></> un{" "}
              </span>
              <TypeAnimation
                sequence={["Desarrollador Web Jr. Full Stack", 2024]}
                speed={50}
                className="text-violet-800"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-10 max-w-lg mx-auto xl:mx-8 lg:mx-0"
            >
              ¡Hola! Soy un desarrollador web full stack Jr con una sólida
              formación adquirida en un bootcamp de 6 meses con F5. Gracias a la
              recreación de un entorno profesional, creando proyectos y
              aplicando las tecnologías más versátiles y demandadas en el sector
              de TI en España, he reforzado un amplio bagaje en el trabajo en
              equipo, adquiriendo un gran abanico de habilidades a lo largo de
              los años ya que siempre he trabajado en equipo. Mi capacidad de
              adaptabilidad,respuesta rápida a nuevos retos y problemas, sin
              descuidar el equipo e incluso potenciándolo, son aspectos que me
              describen. Mi enfoque versátil me permite crear aplicaciones web
              atractivas y funcionales. Utilizo tecnologías como React y Node.js
              para el desarrollo frontend, y Express, MySQL y Sequelize para el
              backend. Con mis habilidades de programación y modestas
              habilidades en diseño, garantizo interfaces elegantes y óptimas
              experiencias visuales. Estoy preparado para aportar mi experiencia
              a proyectos, seguir aprendiendo ofreciendo lo mejor de mí. ¡Déjame
              demostrarte cómo puedo contribuir al éxito de tus iniciativas
              digitales!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max mx-auto lg:mx-10 items-center gap-x-8 mb-12"
            >
              <button className="btn btn-lg rounded-full bg-[#5b21b6] px-6 py-2 transition-colors hover:text-[#5b21b6] hover:bg-transparent">
                Contacto
              </button>
              <a href="#contact">Mi Portoflio</a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-violet-800 flex items-center gap-x-8 max-w-max lg:mx:mx-0 mx-auto"
            >
              <a href="#">
                <FaGithub className="text-2x1" />
              </a>
              <a href="#">
                <FaDiscord className="text-2x1" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2x1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 max-w-[320px] lg:max-w-[480px]"
          >
            <img src={img} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
