import React, { useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MyContext from '../../MyContext';

const Skills = () => {
  const { animate } = useContext(MyContext);
  const skillRefs = useRef([]);
  const textRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div 
      className="w-full"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dpzxu1ykr/image/upload/v1722672401/sl_101121_46080_04_enju9p.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div
        className="relative h-screen w-full p-8 flex flex-col justify-center items-center overflow-hidden"
        initial="hidden"
        animate={animate === 1 ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col lg:flex-row w-full max-w-screen-lg bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
          <motion.div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0" variants={textVariants}>
            <h2 ref={el => textRefs.current[0] = el} className="text-3xl font-bold">My Web Development Journey</h2>
            <p ref={el => textRefs.current[1] = el} className="mt-4 text-lg">
              I started my web development journey delving into HTML and CSS.
              As I progressed, I ventured into JavaScript, enhancing my websites with interactivity and dynamic content.
              I joined Uplift Code Camp to further enhance my skills by learning in-demand skills and technologies like ReactJS.
              Now I have the set of skills needed to create any website you wish.
            </p>
          </motion.div>
          <div className="border-l border-gray-300 mx-4 hidden lg:block"></div>
          <motion.div className="lg:w-1/2 lg:pl-4" variants={textVariants}>
            <h2 ref={el => textRefs.current[2] = el} className="text-3xl font-bold">Skills</h2>
            <motion.div className="flex flex-wrap mt-4 space-y-4">
              {[
                { icon: faHtml5, color: 'text-orange-500', label: 'HTML' },
                { icon: faCss3Alt, color: 'text-blue-500', label: 'CSS' },
                { icon: faJsSquare, color: 'text-yellow-500', label: 'JavaScript' },
                { icon: faReact, color: 'text-blue-500', label: 'ReactJS' },
                { icon: faNodeJs, color: 'text-green-500', label: 'Node.js' },
                { icon: faDatabase, color: 'text-green-500', label: 'MongoDB' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="w-1/2 flex items-center mb-4"
                  ref={el => skillRefs.current[index] = el}
                  initial="hidden"
                  animate={animate === 1 ? 'visible' : 'hidden'}
                  variants={skillVariants}
                >
                  <FontAwesomeIcon icon={skill.icon} size="3x" className={`mr-2 ${skill.color}`} />
                  <span className="text-lg md:text-xl">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
