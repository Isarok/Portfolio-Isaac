import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Ecollectic from "../img/Ecollectic.png";
import Apolliculture from "../img/Apolliculture.png";
import EcoDers from "../img/EcoDers.png";
import Empleate from "../img/Empleate.png";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNpm,
  SiMysql,
  SiVite,
  SiAxios,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa6";

const Project = () => {
  return (
    <section
      className="section  py-[10vh] md:py-[0vh] lg:py-[20vh]  xl:min-h-[60vh] 2xl:min-h-[90vh]"
      id="projects"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1 2xl:max-w-[100%] lg:mx-0"
        >
          <div>
            <h2 className="h2 xl:max-w-[100%] xl:container leading-tight font-semibold 2xl:text-2xl text-xl text-cyan-400  ">
              Estos son los ultimos proyectos en los que colaboré en equipo como propios.
            </h2>
            <p className="max-w-[100%] xl:container mb-4 2xl:text-xl ">
              Puedes verlos acontinuación. Usamos metodologia scrum, control de
              versiones GitHub y Git Bash para llevarlos a cabo. Despliegue en
              githubpages, vercel y netlify.
            </p>
           {/*  <span className="text-3xl justify-center flex flex-row gap-2">
              <FaHtml5 />
              <FaCss3Alt />
              <SiJavascript />
              <SiTypescript />
              <SiTailwindcss />
              <FaReact />
              <FaGitAlt />
              <FaGithub />
              <SiNpm />
              <FaNodeJs />
              <SiMysql />
            </span> */}
          </div>
        </motion.div>

        <div className="flex lg:flex-row flex-col gap-x-0 xl:container -mx-16 lg:mx-auto">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 m-10 xl:mb-0 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"
                href="https://6569c7d303571912c7181e30--preeminent-maamoul-9cf0cf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              ></a>
              <img
                src={EcoDers}
                alt=" Imagen de proyecto EcoDers"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
                              md:group-hover:bottom-32 md:left-12
                              lg:left-12">
                <span className="text-cyan-400 md:text-3xl lg:text-3xl sm:text-sm text-1xl  ">
                  Frontend
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50 
                              md:left-12 md:gap-4 md:group-hover:bottom-12">
                <span className="flex flex-row gap-2 text-white 
                                md:text-[40px] 
                                lg:text-1xl text-1xl ">
                  <FaHtml5 className="text-red-500" />
                  <FaCss3Alt className="text-blue-500" />   
                </span >
                <div className="absolute -bottom-full left-12 group-hover:bottom-[25px] transition-all duration-500 z-50
                                md:left-72 md:group-hover:bottom-[70px] 
                                lg:left-40 lg:group-hover:bottom-[70px]">
                  <a href="https://github.com/Isarok/Eco-Ders-2"
                     className="cursor-pointer text-gray-200"                 
                     target="_blank"
                     rel="noreferrer">
                    <FaGithub 
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          filter:
                            "drop-shadow(0px 4.42184px 4.23px rgba(79, 209, 197, 1))",
                        }}
                    className="flex flex-row justify-between mx-36 text-3xl 
                    md:text-6xl 
                    lg:text-6xl "
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>
              <img
                src={Apolliculture}
                alt=" Imagen de proyecto Apolliculture"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
              md:group-hover:bottom-32 md:left-12">
                <span className="text-cyan-400 md:text-3xl lg:text-3xl sm:text-sm text-1xl  ">
                  Frontend & Backend
                </span>
              </div>

              <div className="absolute -bottom-full left-4 flex justify-center group-hover:bottom-16 transition-all duration-500 z-50
              md:left-12 md:gap-4 md:group-hover:bottom-12">
                <span className="flex flex-row gap-2 text-white 
                md:text-[40px] 
                lg:text-1xl text-1xl">
                  {/* <FaHtml5 className="text-red-400" />
                  <FaCss3Alt className="text-blue-400" /> */}
                  <SiTypescript className="text-blue-700" />
                  <FaReact className="text-cyan-400" />
                  <SiVite className="text-purple-800" />
                  <SiTailwindcss className="text-cyan-400" />
                  <SiMysql className="text-orange-400" />
                  <FaNodeJs className="text-green-400" />
                  <SiExpress className="text-gray-400" />
                  <SiPrisma className="text-white-400" />
                </span>
                <div className="absolute -bottom-full left-12 group-hover:bottom-[25px] transition-all duration-500 z-50
                                md:left-72 md:group-hover:bottom-[70px] 
                                lg:left-40 lg:group-hover:bottom-[70px]">
                  <a href="https://github.com/Isarok/Eco-Ders-2"
                     className="cursor-pointer text-gray-200"                 
                     target="_blank"
                     rel="noreferrer">
                    <FaGithub 
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          filter:
                            "drop-shadow(0px 4.42184px 4.23px rgba(79, 209, 197, 1))",
                        }}
                    className="flex flex-row justify-between mx-36 text-3xl 
                    md:text-6xl 
                    lg:text-6xl "
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 m-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>

              <a
                className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"
                href="https://ecollec-isaacs-projects-b15fcb7e.vercel.app/"
                target="_blank"
                rel="noreferrer"
              ></a>

              <img
                src={Ecollectic}
                alt="Imagen de proyecto Ecollectic"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
                              md:group-hover:bottom-32 md:left-12
                              lg:left-12">
                <span className="text-cyan-400 md:text-3xl lg:text-3xl sm:text-sm text-1xl">
                  Frontend 
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50
                              md:left-12 md:gap-4 md:group-hover:bottom-12">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-[40px] 
                                 lg:text-1xl text-1xl ">
                  <FaHtml5 className="text-red-400" />
                  <FaCss3Alt className="text-blue-400" />
                  <SiJavascript className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiTailwindcss className="text-cyan-400"></SiTailwindcss>
                </span>
                <div className="absolute -bottom-full left-12 group-hover:bottom-[25px] transition-all duration-500 z-50
                                md:left-72 md:group-hover:bottom-[70px] 
                                lg:left-40 lg:group-hover:bottom-[70px]">
                  <a href="https://github.com/Isarok/Eco-Ders-2"
                     className="cursor-pointer text-gray-200"                 
                     target="_blank"
                     rel="noreferrer">
                    <FaGithub 
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          filter:
                            "drop-shadow(0px 4.42184px 4.23px rgba(79, 209, 197, 1))",
                        }}
                    className="flex flex-row justify-between mx-36 text-3xl 
                    md:text-6xl 
                    lg:text-6xl "
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"
                href="https://empleate-con-talento-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              ></a>

              <img
                src={Empleate}
                alt="Imagen de proyecto Ecollectic"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
                              md:group-hover:bottom-32 md:left-12
                              lg:left-12">
                <span className="text-cyan-400 md:text-3xl lg:text-3xl sm:text-sm text-1xl">
                  Frontend & Backend
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50
                              md:left-12 md:gap-4 md:group-hover:bottom-12">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-[40px] 
                                 lg:text-1xl text-1xl ">
                  {/* <FaHtml5 className="text-red-400" />
                  <FaCss3Alt className="text-blue-400" /> */}
                  <SiJavascript className="text-yellow-400" />
                  <SiTypescript className="text-blue-700" />
                  <FaReact className="text-cyan-400" />
                  <SiVite className="text-purple-800" />
                  <SiTailwindcss className="text-cyan-400" />
                  <SiMysql className="text-orange-400" />
                  <FaNodeJs className="text-green-400" />
                  <SiAxios className="text-purple-500" />
                </span>
                <div className="absolute -bottom-full left-12 group-hover:bottom-[25px] transition-all duration-500 z-50
                                md:left-72 md:group-hover:bottom-[70px] 
                                lg:left-40 lg:group-hover:bottom-[70px]">
                  <a href="https://github.com/Isarok/Eco-Ders-2"
                     className="cursor-pointer text-gray-200"                 
                     target="_blank"
                     rel="noreferrer">
                    <FaGithub 
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          filter:
                            "drop-shadow(0px 4.42184px 4.23px rgba(79, 209, 197, 1))",
                        }}
                    className="flex flex-row justify-between mx-36 text-3xl 
                    md:text-6xl 
                    lg:text-6xl "
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
