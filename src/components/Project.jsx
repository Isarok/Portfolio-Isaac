import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Ecollectic from "../images/Ecollectic.png";
import Apolliculture from "../images/Apolliculture.png";
import ToDo from "../images/ToDo.png";
import Empleate from "../images/Empleate.png";
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
import { FaGithub, FaReact } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";

const Project = () => {
  return (
    <section
      className="max-w-[300px] mx-auto py-[10vh] relative items-center text-gray-300 rounded-lg
                 md:max-w-[600px] md:py-[20vh]
                 lg:max-w-[1000px] lg:py-[20vh]
                 xl:max-w-[1000px] xl:min-h-[20vh]
                 2xl:max-w-[1200px] 2xl:min-h-[100vh]"
                 id="projects"
    >
      <div className="flex flex-col mx-auto">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1 2xl:max-w-[100%] lg:mx-0"
        >
          <div className="md:m-[-1rem] 
                          lg:m-8 
                          xl:m-8 
                          2xl:m-8 ">
            <h2 className="text-xl text-cyan-400 leading-tight font-semibold
                           md:text-2xl
                           lg:text-xl 
                           xl:max-w-[1000px] 
                           2xl:text-2xl">
              Estos son los últimos proyectos en los que colaboré, tanto en equipo como en solitario.
            </h2>
            <p className="mb-4
                         md:text-xl md:py-2
                         lg:text-lg lg:mb-2
                         xl:text-xl
                         2xl:text-xl ">
              Puedes verlos a continuación. Usamos la metodología <span className="text-cyan-300 font-semibold">Scrum</span> y <span className="text-cyan-300  font-semibold">Kanban</span>, 
              además de control de versiones con Git para llevarlos a cabo. 
              Los despliegues se realizaron en <span className="text-cyan-300  font-semibold">GitHub Pages, Vercel </span> y <span className="text-cyan-300  font-semibold">Netlify.</span>
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col -mx-16
                        
                        lg:mx-auto lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4 m-10 xl:mb-0 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"
                href="https://myyourtodolist.netlify.app/"
                target="_blank"
                rel="noreferrer"
              ></a>
              <img
                src={ToDo}
                alt=" Imagen de proyecto ToDo"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
                              md:group-hover:bottom-32 md:left-12
                              lg:left-4 lg:group-hover:bottom-16">
                <span className="text-cyan-400 md:text-4xl lg:text-2xl sm:text-sm   ">
                  Tecnologías:
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50 
                              md:left-12 md:gap-4 md:group-hover:bottom-12 
                              lg:group-hover:bottom-4 lg:left-4">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-5xl 
                                 lg:text-3xl 
                                 text-xl ">
                  <FaHtml5 className="text-red-500" />
                  <FaCss3Alt className="text-blue-500" /> 
                  <SiJavascript className="text-yellow-400" />  
                </span >
                
              </div>
            </div>

            <article className="flex flex-col gap-y-6 text-gray-300
                                md:text-xl"> 
            My ToDo List es una aplicación de tareas que permite agregar, editar, actualizar, eliminar y clasificar tareas.    
            <ul className="flex flex-wrap gap-2 ">
            <li>
              <span className="btn absolute w-full">
                <span className="animate-background" />
                  <div className="btn-content">
                    <a href="https://github.com/Isarok/ToDoList" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn-link">
                      <FaGithub className="icon-general" />
                      Código
                    </a>
                  </div>
                </span>
              
            </li>
            <li>
              <span className="relative btn">
                <span className="animate-background" />
                  <div className="btn-content">
                    <a
                     href="https://myyourtodolist.netlify.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn-link"
                    >
                    <GiWireframeGlobe className="icon-general" />
                    Demo
                  </a>
                </div>
              </span>
            </li>
            </ul>
            </article>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>
              <img
                src={Apolliculture}
                alt=" Imagen de proyecto Apolliculture"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
              md:group-hover:bottom-32 md:left-12
              lg:left-4 lg:group-hover:bottom-16">
                <span className="text-cyan-400 md:text-4xl lg:text-2xl sm:text-sm">
                  Tecnologías:
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50
                              md:left-12 md:gap-4 md:group-hover:bottom-12
                              lg:group-hover:bottom-4 lg:left-4">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-[40px] 
                                 lg:text-3xl 
                                 text-xl">
                  <SiTypescript className="text-blue-700" />
                  <FaReact className="text-cyan-400" />
                  <SiVite className="text-purple-800" />
                  <SiTailwindcss className="text-cyan-400" />
                  <SiMysql className="text-orange-400" />
                  <FaNodeJs className="text-green-400" />
                  <SiExpress className="text-gray-400" />
                  <SiPrisma className="text-white-400" />
                </span>
              </div>
            </div>
            <article className="flex flex-col gap-y-6 text-gray-300
                                md:text-xl">
            Apolliculture es un marketplace de mieles desarrollado con TypeScript, que integra tanto frontend como backend. 
            
            <ul className="flex flex-wrap gap-2  ">
              <li >
                <span className="btn absolute w-full">
                  <span className="animate-background" />
                    <div className="btn-content">              
                      <a href="https://github.com/DenisseNavarro/Apolliculture"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-link">
                        <FaGithub className="icon-general"/>
                        Código   
                      </a>
                    </div>
                  </span> 
              </li>
              <li >
                 
                   {/* <a href=""
                        className="inline-flex items-center justify-between px-3 py-2 text-xs font-semibold text-center text-black bg-white transition border  border-black/60 rounded-lg hover:bg-black/10 hover:text-gray-200 hover:border-gray-200 md:text-sm "                 
                        target="_blank"
                        rel="noreferrer">
                        <GiWireframeGlobe className="flex flex-row text-2xl w-5 h-5 mr-1" />
                         Demo                   
                   </a> */}
               </li>
            </ul>
            </article>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4 m-10 "
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
                              lg:left-4 lg:group-hover:bottom-16">
                <span className="text-cyan-400 md:text-4xl lg:text-2xl sm:text-sm">
                  Tecnologías:
                </span>
              </div>

              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50 
                              md:left-12 md:gap-4 md:group-hover:bottom-12 
                              lg:group-hover:bottom-4 lg:left-4">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-[40px] 
                                 lg:text-3xl 
                                 text-xl ">
                  <FaHtml5 className="text-red-400" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiJavascript className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiTailwindcss className="text-cyan-400"></SiTailwindcss>
                </span>
              </div>
            </div>
            <article className="flex flex-col gap-y-6 text-gray-300
                                md:text-xl">
              eCollectic es una plataforma de eCommerce sencilla creada para practicar con React y sus hooks, conectada a una API pública.
            
            <ul className="flex flex-wrap gap-2 ">
              <li>
                <span className="btn absolute w-full">
                  <span className="animate-background" />
                    <div className="btn-content">

                      <a href="https://github.com/Isarok/Ecollec"
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn-link">
                        <FaGithub className="flex flex-row text-2xl w-5 h-5 mr-1"/>
                         Código   
                      </a>
                    </div>
                  </span>             
              </li>
              <li>
                <span className="relative btn">
                  <span className="animate-background" />
                    <div className="btn-content">
                 
                      <a href="https://ecollec-isaacs-projects-b15fcb7e.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link">
                        <GiWireframeGlobe className="flex flex-row text-2xl w-5 h-5 mr-1"/>
                         Demo                   
                      </a>
                    </div>
                  </span>
               </li>
            </ul>
            </article>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"
                href="https://empleate-con-talento-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >       
              </a>

              <img
                src={Empleate}
                alt="Imagen de proyecto Ecollectic"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-4 group-hover:bottom-24 transition-all duration-500 z-50
                              md:group-hover:bottom-32 md:left-12
                              lg:left-4 lg:group-hover:bottom-16">
                <span className="text-cyan-400 md:text-4xl lg:text-2xl sm:text-sm ">
                  Tecnologías:
                </span>
              </div>
              <div className="absolute -bottom-full left-4 group-hover:bottom-16 transition-all duration-500 z-50 
                              md:left-12 md:gap-4 md:group-hover:bottom-12 
                              lg:group-hover:bottom-4 lg:left-4">
                <span className="flex flex-row gap-2 text-white 
                                 md:text-[40px] 
                                 lg:text-3xl 
                                 text-xl">
                  <SiJavascript className="text-yellow-400" />
                  <SiTypescript className="text-blue-700" />
                  <FaReact className="text-cyan-400" />
                  <SiVite className="text-purple-800" />
                  <SiTailwindcss className="text-cyan-400" />
                  <SiMysql className="text-orange-400" />
                  <FaNodeJs className="text-green-400" />
                  <SiAxios className="text-purple-500" />
                </span>    
              </div>
            </div>
            <article className="flex flex-col gap-y-6 text-gray-300
                                md:text-xl">
              Desarrollamos este proyecto con un cliente real, enfocado en la formación y desarrollo de habilidades para la búsqueda de empleo.
          
            <ul className="flex flex-wrap gap-2 ">
              <li>
                <span className="relative btn">
                  <span className="animate-background" />
                    <div className="btn-content">          
                      <a href="https://github.com/Isarok/EmpleateConTalentoFront"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link">
                        <FaGithub className="flex flex-row text-2xl w-5 h-5 mr-1"/>
                        Código   
                      </a>
                    </div>
                  </span>
              </li>
              <li>
                <span className="relative btn">
                  <span className="animate-background" />
                    <div className="btn-content">

                      <a href="https://empleate-con-talento-front.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link">
                        <GiWireframeGlobe className="flex flex-row text-2xl w-5 h-5 mr-1"/>
                        Demo                   
                      </a>
                    </div>
                  </span>
               </li>
            </ul>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
