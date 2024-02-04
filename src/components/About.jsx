import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20 h-screen">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="h2 text-violet-800">About Me</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
