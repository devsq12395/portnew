import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MyContext from "../../MyContext";

const projectsData = [
  {
    title: 'HTML Poker with Gemini AI',
    description: "This website allows you to play poker with Google's Gemini AI. The game is integrated with the Gemini AI API, enabling real-time access to the AI. I developed all the poker logic, including the hand value calculator and comparison, using JavaScript ES6. The code is designed to be very versatile and clean, making it easy to modify the game, like adding more opponents at the table.",
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API Integration with Gemini AI'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-03_upwtin.jpg',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-04_who0a0.jpg',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    ],
    features: [
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Seemless AI Communication and Processing',
        description: 'The algorithm is designed to communicate with Gemini AI in a natural and engaging way, making the game feel like a real game. The logic is also programmed to effectively process Gemini AI responses.',
      },
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Self-Made Poker Hand Value Calculator and Comparison',
        description: 'I have searched the internet for a poker hand value calculator and comparison, but none were accurate enough and most have problems which leads to inaccuracies. I have created my own that uses a simple algorithm, which is very accurate and easy to use.',
      },
    ],
    websiteUrl: 'https://gemini-poker.vercel.app/',
    repoUrl: '',
  },
  {
    title: 'Ideahub Zeta',
    description: `Social forum platform developed with Vite+React, and Node.js with MongoDB for backend. It allows users to share their ideas and engage in discussions across a wide array of topics. Threads are organized into categories for focused conversations. The application uses RESTful APIs for efficient data management and provides real-time updates to users through WebSockets.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-01_p1gzlu.png',
    techStack: ['Vite+React', 'Node.js', 'MongoDB'],
    screenshots: [
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041108/Portfolio/site3-02_eeuosy.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-01_p1gzlu.png',
      'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-03_obs5hz.png',
    ],
    features: [
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Seemless AI Communication and Processing',
        description: 'The algorithm is designed to communicate with Gemini AI in a natural and engaging way, making the game feel like a real game. The logic is also programmed to effectively process Gemini AI responses.',
      },
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Self-Made Poker Hand Value Calculator and Comparison',
        description: 'I have searched the internet for a poker hand value calculator and comparison, but none were accurate enough and most have problems which leads to inaccuracies. I have created my own that uses a simple algorithm, which is very accurate and easy to use.',
      },
    ],
    websiteUrl: 'https://ideahub-zeta.vercel.app/',
    repoUrl: '',
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
    features: [
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Seemless AI Communication and Processing',
        description: 'The algorithm is designed to communicate with Gemini AI in a natural and engaging way, making the game feel like a real game. The logic is also programmed to effectively process Gemini AI responses.',
      },
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Self-Made Poker Hand Value Calculator and Comparison',
        description: 'I have searched the internet for a poker hand value calculator and comparison, but none were accurate enough and most have problems which leads to inaccuracies. I have created my own that uses a simple algorithm, which is very accurate and easy to use.',
      },
    ],
    websiteUrl: 'https://uplift-credence.netlify.app/',
    repoUrl: '',
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
    features: [
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Seemless AI Communication and Processing',
        description: 'The algorithm is designed to communicate with Gemini AI in a natural and engaging way, making the game feel like a real game. The logic is also programmed to effectively process Gemini AI responses.',
      },
      {
        imgUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
        title: 'Self-Made Poker Hand Value Calculator and Comparison',
        description: 'I have searched the internet for a poker hand value calculator and comparison, but none were accurate enough and most have problems which leads to inaccuracies. I have created my own that uses a simple algorithm, which is very accurate and easy to use.',
      },
    ],
    websiteUrl: 'https://proj-management-app-clydon.vercel.app/',
    repoUrl: '',
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
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      overflow: 'auto' // Enable scrolling
    }}>
      <motion.div
        className="relative h-full w-full p-8 flex gap-4"
        style={{
          overflow: 'auto' // Enable scrolling
        }}
        initial="hidden"
        animate={animate === 1 ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        
        {/* Selector */}
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
          
          {/* Main Body */}
          <motion.div
            className="md:w-3/4 p-4 flex flex-col space-y-4 overflow-y-auto border border-blue-300 bg-blue-200 bg-opacity-50"
            initial="hidden"
            animate={animate === 1 ? 'visible' : 'hidden'}
            variants={contentVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col space-y-4 gap-4 h-[2000px] min-h-[2000px] overflow-y-auto"
                key={selectedProjectIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Description */}
                <h2 className="text-5xl text-center">{selectedProject.title}</h2>
                <p className="text-base md:text-lg">{selectedProject.description}</p>
                <div className="text-base md:text-lg">
                  <strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}
                </div>

                <hr className="mx-auto w-[90%] border-t-2 border-gray-500 my-4" />
                
                {/* Features */}
                <h2 className="text-3xl font-bold">Features</h2>
                <div className="space-y-4">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex">
                      <img src={feature.imgUrl} alt={feature.title} className="w-1/3 h-auto object-cover rounded-md mr-4" />
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-base">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="mx-auto w-[90%] border-t-2 border-gray-500 my-4" />

                {/* Screenshots */}
                <h2 className="text-3xl font-bold">Screenshots</h2>
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

                <hr className="mx-auto w-[90%] border-t-2 border-gray-500 my-4" />
                
                {/* Links */}
                <div className="flex space-x-4 mx-auto">
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