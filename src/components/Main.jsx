import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import img from "../img/IsarockDev.png";

const Main = () => {
  return (
    <section
      className="section py-[20vh] md:py-[30vh] lg:py-[26vh] xl:min-h-[60vh] 2xl:min-h-[100vh] "
      id="home"
    >
      <div className="container mx-auto lg:max-w-[1200px] 2xl:max-w-[1200px]">
        <div className="flex flex-col md:flex-row lg:flex-row lg:items-center gap-y-10 lg:gap-y-20 lg:gap-x-20">
          <div className="flex-1 font-secondary md:text-left lg:text-left ">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 text-[26px] lg:text-[40px] 2xl:text-[60px]  uppercase leading-[1] font-semibold"
            >
              <span className="mr-2">Soy</span>
              <span className="text-cyan-400">Isaac Garcia Romero.</span>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 max-w-lg
              md:mb-8
              lg:mb-12 lg:max-w-3xl
              sm:max-w-sm 
              2xl:mx-0 2xl:max-w-3xl 2xl:text-xl 2xl:max-w-[1200px] "
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
              className="flex flex-col mx-auto items-center gap-y-4
                         md:gap-8 md:flex md:flex-row md:justify-start
                         lg:gap-20 lg:justify-start  
                         2xl:mb-0 2xl:mx-0 "
                        
                      
            >
              <span className="relative inline-block overflow-hidden my-6 rounded-md p-[2px]">
                  <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D6FFFE_0%,#00FFF7_50%,#E2CBFF_100%)]" />
                  <div
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-gray-950  px-3 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl
                    2xl:text-2xl "
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=isaacfstack@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-50"
                    >
                      <button >Contacto</button>
                      
                    </a>
                  </div>
                </span>
              <div
                className="flex justify-around m-4 md:m-0 gap-x-10 gap-y-4
                          sm:gap-x-16 
                          md:gap-x-12
                          lg:flex-row  lg:gap-x-20
                          2xl:gap-x-20"
              >

                <a
                  href="https://docs.google.com/document/d/1pF7dyoWNfUFHGvCdg0XtNNPOKMay5a6l/edit?usp=sharing&ouid=105822291999599368082&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PiReadCvLogo  className="text-4xl 2xl:text-5xl text-cyan-400" />
                </a>
                
                <a
                  href="https://github.com/Isarok"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-4xl 2xl:text-5xl text-cyan-400" />
                </a>
                <a
                  href="https://discord.com/channels/@me"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord className="text-4xl 2xl:text-5xl text-cyan-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/isaac-garc%C3%ADa-romero-b73202a6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-4xl 2xl:text-5xl text-cyan-400" />
                </a>
              {/*   <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=isaac.lucerito@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGmail className="text-4xl 2xl:text-7xl text-cyan-400" />
                </a> */}
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
            className="flex-1 max-w-[220px] xl:max-w-[280px] 2xl:max-w-[460px] lg:mx-0
            md:max-w-[280px] md:flex-row md: "
          >
            <div className="">
              <img
                src={img}
                alt="Yo sonriendo a la cámara"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  filter:
                    "drop-shadow(0px 4.42184px 37.23px rgba(79, 209, 197, 1))",
                }}
                
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
