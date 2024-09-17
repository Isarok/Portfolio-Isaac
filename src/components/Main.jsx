import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import img from "../img/PruebaImg.png";

const Main = () => {
  return (
    <section
      className=" py-[20vh] 
                  md:py-[30vh] 
                  lg:py-[26vh] 
                  xl:min-h-[60vh] 
                  2xl:min-h-[100vh] "
                  id="home"
    >
      <div className=" mx-auto max-w-[300px] 
                       md:max-w-[600px] 
                       lg:max-w-[1000px] 
                       xl:max-w-[1000px] 
                       2xl:max-w-[1200px] ">
        <div className="flex flex-col gap-y-10
                        md:flex-row 
                        lg:flex-row lg:items-center lg:gap-y-10 lg:gap-x-10">
          <div className="flex-1 
                          md:text-left 
                          lg:text-left ">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 text-[32px] lg:text-[50px] 2xl:text-[50px] uppercase leading-[1] font-semibold"
            >
              <span className="mr-2">Soy</span>
              <span 
                className="bg-gradient-to-r from-[rgba(2,165,184,1)] from-[10%] via-[rgba(0,228,255,1)] via-[30%] to-[rgba(152,251,255,1)] to-[90%] text-transparent bg-clip-text">
                Isaac Garcia Romero.
              </span>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 max-w-lg
              md:mb-6
              lg:mb-18 lg:text-lg lg:max-w-[1000px]
              2xl:mx-0 2xl:text-xl 2xl:max-w-[1200px] "
            >
              Graduado de un bootcamp de 8 meses <span className="text-cyan-300 font-semibold">Fullstack</span> + <span className="text-cyan-300 font-semibold">Ciberseguridad</span> con factoría F5. 
              Poseo habilidades sólidas en <span className="text-cyan-300 font-semibold">desarrollo web </span>y una gran <span className="text-cyan-300 font-semibold">ética de trabajo en equipo</span>. 
              Mi enfoque versátil me permite crear aplicaciones web funcionales y atractivas. 
              Estoy comprometido con el <span className="text-cyan-300 font-semibold">aprendizaje continuo</span> y estoy dispuesto a poner en práctica todas mis habilidades al servicio de cualquier desafío.
            </motion.p>

            <motion.article
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-center mx-auto items-center gap-y-4
                         md:gap-8 md:flex md:flex-row md:justify-start
                         lg:gap-20 lg:flex lg:flex-row    
                         2xl:mb-0 2xl:mx-0 2xl:gap-12 2xl:flex 2xl:flex-row 2xl:justify-start"
                        
                      
            >
              <span className="btn absolute ">
                  <span className="animate-background" />
                   <div
                    className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#123] px-28 py-1  text-gray-50 backdrop-blur-3xl
                    md:w-full
                    lg:px-3
                    xl:px-3
                    2xl:text-xl "
                   >
                     <a
                       href="https://mail.google.com/mail/?view=cm&fs=1&to=isaacfstack@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-50 "
                     >
                      <button className="hover:text-cyan-400 ">Contacto</button>
                     </a>
                  </div>
              </span>
              <ul className="flex justify-around m-4 md:m-0 gap-x-12 gap-y-12
                             lg:gap-x-16
                             2xl:gap-x-20">
                <li >
                  <a
                    href="https://docs.google.com/document/d/1pF7dyoWNfUFHGvCdg0XtNNPOKMay5a6l/edit?usp=sharing&ouid=105822291999599368082&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="0" height="0">
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" x3="0%" y3="0%">
                        <stop offset="0%" style={{ stopColor: "rgba(2,165,184,1)", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "rgba(0,228,255,1)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(152,251,255,1)", stopOpacity: 1 }} />
                      </linearGradient>
                    </svg>
                  <PiReadCvLogo style={{ fill: "url(#grad1)" }}
                                type="button"
                                className="text-4xl 2xl:text-5xl  hover:scale-x-150 hover:scale-y-150 	" />
                </a>
                </li>
                <li>
                <a
                  href="https://github.com/Isarok"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={{ fill: "url(#grad1)" }}
                            type="button"
                            className="text-4xl 2xl:text-5xl text-cyan-400 hover:scale-x-150 hover:scale-y-150	" />
                </a>
                </li>
                <li>
                <a
                  href="https://discord.com/channels/@me"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord style={{ fill: "url(#grad1)" }}
                            type="button" 
                            className="text-4xl 2xl:text-5xl text-cyan-400 hover:scale-x-150 hover:scale-y-150	" />
                </a>
                </li>
                <li>
                <a
                  href="https://www.linkedin.com/in/isaac-garc%C3%ADa-romero-b73202a6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin style={{ fill: "url(#grad1)" }}
                              type="button" 
                              className="text-4xl 2xl:text-5xl icon-gradient hover:scale-x-150 hover:scale-y-150	" />
                </a>
                </li>
              </ul>
            </motion.article>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 lg:mx-0
                       md:max-w-[280px] md:flex-row 
                       lg:max-w-[350px] lg:flex-col
                       xl:max-w-[350px] xl:flex-row
                       2xl:max-w-[550px] 2xl:flex-row
            "
          >
              <img
                src={img}
                alt="Yo sonriendo a la cámara"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  filter:
                  "drop-shadow(0px 4.42184px 39.23px rgba(89, 219, 297, 1))",
                }}
              /> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
