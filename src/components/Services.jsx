import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    nome: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo tempora saepe.",
    link: "Learn More",
  },
  {
    nome: "Full Stack Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo tempora saepe.",
    link: "Learn More",
  },
  {
    nome: "Movil App Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo tempora saepe.",
    link: "Learn More",
  },
  {
    nome: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo tempora saepe.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section className="section mt-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            >
              <h2 className="h2 text-violet-800 mb-6">Who am I?</h2>
              <h3 className="h3 max-w-[455px] mb-16">
                I am an adventurer who loves programming and design.
              </h3>

              <button className="btn btn-sm">See my projects</button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div>
                {services.map((item, idx) => {
                  const { nome, desc, link } = item;
                  return (
                    <div
                      key={idx}
                      className="border-b  border-white/20 h-[130px] mb-4 flex gap-x-4"
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-xl -tracking-wide font-primary font-semibold">
                          {nome}
                        </h4>
                        <p className="font-secondary leading-tinght mt-2 text-gray-300">
                          {desc}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a
                          href="#"
                          className="btn w-9 h-9 flex items-center justify-center"
                        >
                          <BsArrowRight />
                        </a>
                        <a href="#" className="text-sm">
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
