/* eslint-disable no-unused-vars */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-30 h-screen">
          <motion.div
            variants={fadeIn("right", 0.5)}
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
            <h2 className="h2 text-violet-800">Sobre mí</h2>
            <h3 className="mb-4">
              En mi labor, soy un desarrollador web full stack Jr con una gran
              actitud y motivación para afrontar retos en el desarrollo de
              aplicaciones web.
            </h3>

            <p className="mb-6">
              Quiero seguir aprendiendo, enfrentando nuevos desafíos.¡Listo para
              contribuir y llevar proyectos al siguiente nivel!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
