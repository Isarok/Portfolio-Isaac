/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section py-48 lg:48" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-y-10  lg:gap-x-30 h-screen">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="font-primary text-[35px] mb-6 text-violet-800">
              Sobre mí
            </h2>
            <h3 className="h3 mb-4">
              Como desarrollador web full stack Jr, destaco por mi actitud
              proactiva, capacidad de adaptación y motivación para enfrentar
              diferentes desafíos de desarrollo en aplicaciones web..
            </h3>

            <p className="mb-6">
              Estoy entusiasmado por continuar aprendiendo y asi poder enfrentar
              nuevos desafíos. Estoy preparado para contribuir y pasar al
              siguiente nivel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
