import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import img from "../img/IsarockDev.png";

const Main = () => {
  return (
    <section
      className="section min-h-[75vh] lg:min-h-[40vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-2 lg:mx-auto lg:-mt-38 mt-1 max-w-full lg:max-w-[6xl]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-y-20 lg:gap-x-20">
          <div className="flex-1 text-center font-secondary md:text-left lg:text-left ">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mt-2 font-primary text-[26px] lg:text-[40px] uppercase leading-[1] font-semibold"
            >
              <span className="mr-2">Soy</span>
              <TypeAnimation
                sequence={[
                  "Isaac Garcia Romero.",
                  2024,
                  "Desarrollador Web Full Stack.",
                  2024,
                ]}
                speed={40}
                className="text-cyan-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-14 max-w-lg mx-auto lg:mx-0 text-justify "
            >
              Graduado de un bootcamp de 8 meses Fullstack + Cyberseguridad con
              F5. Poseo habilidades sólidas en desarrollo web y una gran ética
              de ambientelaboral. Mi enfoque versátil me permite crear
              aplicaciones web funcionales y atractivas. Estoy comprometido con
              el aprendizaje continuo y estoy dispuesto a poner en practica
              todas mis habilidades al servicio de cualquier desafio.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max mx-auto lg:mx-10 items-center gap-x-8 mb-12"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D6FFFE_0%,#00FFF7_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl">
                  Contacto
                </div>
              </span>
              <div className="flex flex-row justify-between gap-x-16">
                <a href="https://github.com/Isarok">
                  <FaGithub className="text-4xl text-cyan-400" />
                </a>
                <a href="https://discord.com/channels/@me">
                  <FaDiscord className="text-4xl text-cyan-400" />
                </a>
                <a href="https://www.linkedin.com/in/isaac-garc%C3%ADa-romero-b73202a6/">
                  <FaLinkedin className="text-4xl text-cyan-400" />
                </a>
                <a href="https">
                  <SiGmail className="text-4xl text-cyan-400" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-cyan-400 flex items-center gap-x-8 max-w-max lg:mx:mx-0 mx-auto"
            ></motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1  max-w-[220px] lg:max-w-[380px] "
          >
            <div className="">
              <img
                className=""
                src={img}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
