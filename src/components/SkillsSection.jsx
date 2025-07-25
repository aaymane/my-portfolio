import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
import Cv from "./Cv";

const SkillsSection = () => {
  const text =
    "Hello! I'm a web developer with expertise in php , UI/UX Design, Java, PHP, and C/C++. I deliver seamless, responsive web applications with a focus on clean and efficient code .".split(
      " "
    );
  return (
    <div className="skills-hero">
      <span className="code">&lt;html&gt;</span>
      <motion.div
        className="sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="details">
          <h1>
            Skills &#38; <br></br>
            Experience
          </h1>
          <p className="skills-paragraph">
            <div>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
          </p>
        </div>
        <div className="skills">
          <div className="skill">
            <p>Front-End</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 1, duration: 1 }}
                className="bar-progress-front"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>Back-End</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="bar-progress-back"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>UI/UX Design</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "37%" }}
                transition={{ delay: 1.4, duration: 1 }}
                className="bar-progress-react"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>Graphic Design</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64%" }}
                transition={{ delay: 1.6, duration: 1 }}
                className="bar-progress-ui"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>Java</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 1.8, duration: 1 }}
                className="bar-progress-java"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>PHP</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "86%" }}
                transition={{ delay: 2, duration: 1 }}
                className="bar-progress-php"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>C</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "69%" }}
                transition={{ delay: 2.2, duration: 1 }}
                className="bar-progress-c"
              ></motion.div>
            </div>
          </div>
          <div className="skill">
            <p>C++</p>
            <div className="bar">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "81%" }}
                transition={{ delay: 2.4, duration: 1 }}
                className="bar-progress-cpp"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Cv />
    </div>
  );
};

export default SkillsSection;
