import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img from "../img/Coding.png";

const Services = () => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section py-16 lg:48" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-y-10  lg:gap-y-10 gap-x-10 lg:gap-x-10 h-screen">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
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

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="font-primary text-[35px] mb-6 font-semibold text-cyan-400">
              Sobre mí
            </h2>
            <h3 className="h3 mb-4">
              Me considero una persona que destaco por mi actitud proactiva,
              capacidad de adaptación y motivación para enfrentar diferentes
              desafíos y retos que te ofrece la vida y que interpolo al
              desarrollo web...
            </h3>

            <p className="mb-6">
              Me entusiasma el aprendizaje, la mejora continua, ser la mejor
              version de mi mismo. Estoy preparado para contribuir y pasar al
              siguiente nivel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
