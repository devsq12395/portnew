import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MyContext from "../../MyContext";

const projectsData = [
  {
    title: 'HTML Poker with Gemini AI',
    description: "This website allows you to practice playing poker with Google's Gemini AI. The game is integrated with the Gemini AI API, enabling real-time access to the AI for an enhanced poker experience. I developed all the poker logic, including the hand value calculator and comparison, using JavaScript ES6. The code is designed to be very versatile and clean, making it effortless to modify the game, such as by adding more opponents at the table.",
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API Integration with Gemini AI'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-03_upwtin.jpg',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-04_who0a0.jpg',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    ],
    websiteUrl: 'https://gemini-poker.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p2-js-api-app',
  },
  {
    title: 'Ideahub Zeta',
    description: `Ideahub Zeta is a dynamic social forum platform developed with Vite+React for a fast and responsive user interface, and Node.js with MongoDB for a robust backend. It allows users to share their ideas and engage in discussions across a wide array of topics. Threads are organized into distinct categories for easy navigation and focused conversations. The application leverages RESTful APIs for efficient data management and provides real-time updates to users through WebSockets.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-01_p1gzlu.png',
    techStack: ['Vite+React', 'Node.js', 'MongoDB'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041108/Portfolio/site3-02_eeuosy.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-01_p1gzlu.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-03_obs5hz.png',
    ],
    websiteUrl: 'https://ideahub-zeta.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p4-node-app',
  },
  {
    title: 'Credence',
    description: `Credence is a comprehensive platform designed for organizations to issue and manage digital certificates for their users. Developed collaboratively with a team, I focused on creating the front-end using Vite+React and Material UI to ensure a smooth and modern user experience. The back-end, developed with Node.js and MongoDB, provides a scalable and secure system for certificate issuance. The platform supports certificate embedding on external sites using iframes and utilizes JWT for secure authentication and authorization. Webhooks are implemented to notify users of certificate status updates.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721043147/Portfolio/site4-01_syeocj.png',
    techStack: ['Vite+React', 'Material UI', 'Node.js', 'MongoDB'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721043147/Portfolio/site4-01_syeocj.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721043146/Portfolio/site4-02_sv9jyn.png',
    ],
    websiteUrl: 'https://uplift-credence.netlify.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/group-5/fs-mern-app',
  },
  {
    title: 'Project Management App',
    description: "Manage multiple projects and tasks within your organization with ease. This app uses Firebase to handle user authentication, allowing users to register with their email or log in through their Google account. Firestore is used for database storage and retrieval, ensuring efficient data handling. The app provides a robust platform for organizing and tracking the progress of projects and tasks, facilitating better team collaboration and productivity.",
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721040768/Portfolio/site2-02_lu33hu.png',
    techStack: ['ReactJS', 'Firebase', 'Firestore'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721040768/Portfolio/site2-02_lu33hu.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721040768/Portfolio/site2-02_lu33hu.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721040768/Portfolio/site2-01_ymaxrs.png',
    ],
    websiteUrl: 'https://proj-management-app-clydon.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p3-react-app',
  },
];

const Websites = () => {
  const { animate } = useContext(MyContext);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = projectsData[selectedProjectIndex];

  const containerVariants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div style={{
      backgroundImage: "url('https://res.cloudinary.com/dpzxu1ykr/image/upload/v1722672401/sl_101121_46080_04_enju9p.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <motion.div
        className="relative h-full w-full p-8 flex"
        style={{
          height: '100vh', overflowY: 'auto',
        }}
        initial="hidden"
        animate={animate === 1 ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="w-full flex flex-col md:flex-row overflow-y-auto">
          <div className="md:w-1/4 p-4 border-r border-gray-300" style={{ backgroundColor: '#EEE' }}>
            <h2 className="text-3xl font-bold mb-2 text-black">Websites</h2>
            <p className="mb-8">Here are some of the websites I've created, showcasing my expertise in web development and design. Explore these projects to see my skills in action.</p>
            <div className="space-y-4">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-2 flex items-center border rounded-lg ${
                    selectedProjectIndex === index ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedProjectIndex(index)}
                >
                  <img src={project.imageUrl} alt={project.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <h3 className="text-base md:text-lg font-semibold text-black">{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="md:w-3/4 p-4 flex flex-col space-y-4 overflow-y-auto"
            initial="hidden"
            animate={animate === 1 ? 'visible' : 'hidden'}
            variants={contentVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProjectIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <p className="text-base md:text-lg">{selectedProject.description}</p>
                <div className="text-base md:text-lg">
                  <strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.screenshots.length > 0 &&
                    selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-64 object-cover rounded-md"
                      />
                    ))}
                </div>
                <div className="flex space-x-4">
                  <p>Links: </p>
                  <a
                    href={selectedProject.websiteUrl}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  {/* <a
                    href={selectedProject.repoUrl}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Websites;