import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mx-4">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-inherit rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mx-4">
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={styles.sectionSubText}>Overview...</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", ",0.1,1")}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-4"
      >
        I'm a second-year B.Tech student at VIT Vellore University from India,
        passionate about coding and technology. I have a good knowledge in
        front-end development and am progressing toward becoming a Full Stack
        developer. I'm actively involved in open-source contributions. My areas
        of interest include Generative AI, and Cloud computing.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About
