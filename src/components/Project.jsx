import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Ecollectic from "../img/Ecollectic.png";
import Apolliculture from "../img/Apolliculture.png";
import EcoDers from "../img/EcoDers.jpg";

const Project = () => {
  return (
    <section className="section h-screen" id="project">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 m-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight">
                Mis ultimos <br /> proyectos
              </h2>
              <p className="max-w-sm mb-16">
                Puedes verlos aqui, espero que te gusten son creativos, bonitos
                y funcionales.
              </p>
              <button className=" rounded-full bg-[#12eff7] px-6 py-3 transition-colors hover:text-[#12eff7] hover:bg-transparent">
                Ojealos
              </button>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>

              <img
                src={Ecollectic}
                alt="Imagen de proyecto Ecollectic"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-cyan-400 lg:text-3xl text-2xl">
                  Desarrollador web
                </span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-white lg:text-4xl text-2xl">
                  Ecollectic
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 m-10 lg:mb-0"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>
              <img
                src={Apolliculture}
                alt=" Imagen de proyecto Apolliculture"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-cyan-400 lg:text-3xl text-2xl">
                  Desarrollador web
                </span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-white lg:text-4xl text-2xl">
                  Apolliculture
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer"></div>
              <img
                src={EcoDers}
                alt=" Imagen de proyecto Apolliculture"
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-cyan-400 lg:text-3xl text-2xl">
                  Desarrollador web
                </span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-white lg:text-4xl text-2xl">EcoDers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
