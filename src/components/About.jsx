import React from "react";
import { CountUp } from "react-countup";
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
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="h2 text-violet-800">About Me</h2>
            <h3 className="mb-4">
              I am a passionate developer with 6 months of bootcamp experience.
            </h3>

            <p className="mb-6">
              Specialised in full stack web development, mobile and design.
              Passionate about learning and facing new challenges. Ready to
              contribute and take projects to the next level!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
