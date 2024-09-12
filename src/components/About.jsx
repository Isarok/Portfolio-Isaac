/* import { BsArrowRight } from "react-icons/bs"; */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Link } from "react-scroll";
import img from "../img/EscalandoB.png";

const AboutMe = () => {
  return (
    <section className=" py-[10vh] md:py-[20vh] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1200px] lg:mx-auto lg:py-[28vh] xl:min-h-[60vh] 2xl:min-h-[100vh]" id="aboutMe">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center gap-y-10 lg:gap-y-0 lg:gap-x-32 2xl:gap-x-48 ">
          <div className="flex-1 text-center font-secondary md:text-right lg:text-left">
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className=" max-w-[220px] lg:max-w-[380px] xl:max-w-[380px] 2xl:max-w-[460px] lg:mx-0
              md:max-w-[580px] md:flex-row "
            >
              <img
                src={img}
                alt="Isaac escalando en el cerro del hierro"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  filter:
                  "drop-shadow(0px 4.42184px 35.23px rgba(89, 219, 297, 1))",
                }}
                
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mix-blend-lighten lg:mb-0"
          >
            <h2 className="font-primary text-[35px] mb-6 2xl:text-[60px] text-cyan-400 ">
            ¿Quién soy?
            </h2>
            <h3 className=" max-w-[600px] mb-12 2xl:mb-20 2xl:max-w-[800px] 2xl:text-xl 2xl:text-3xl  ">
            Después de años explorando las alturas, 
            desafiando límites en la escalada y haciendo tours internacionales con grandes artistas, 
            decidí que era hora de explorar nuevos horizontes. Es un giro de 180° emocionante y que me entusiasma. 
            Estoy preparado para aplicar la misma determinación y pasión que he llevado a lo largo de estos años a este nuevo desafío.
            </h3>
                
            <Link to="projects">
              <button className="rounded-md text-black bg-[#12eff7] px-6 py-3 transition-colors hover:text-[#12eff7] border border-black hover:bg-transparent hover:border hover:border-[#12eff7]
              ">
                Curiosea mis proyectos
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
