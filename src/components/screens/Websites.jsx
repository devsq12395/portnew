import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyContext from "../../MyContext";
import projectsData from '../../data/projectsData';

const Websites = () => {
  const { animate } = useContext(MyContext);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentFeaturePage, setCurrentFeaturePage] = useState(0);
  const [direction, setDirection] = useState('next');
  const featuresPerPage = 1;
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

  const variants = {
    enter: (direction) => ({
      x: direction === 'next' ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    }
  };

  return (
    <div style={{
      backgroundImage: "url('https://res.cloudinary.com/dpzxu1ykr/image/upload/v1738605498/fuhaagowuetuhqxeqgua.jpg')",
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
          <div className="md:w-1/4 p-4 border-r border-gray-300" style={{ backgroundColor: '#e6f2ff' }}>
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
            className="md:w-3/4 p-4 flex flex-col space-y-4 overflow-y-auto border border-blue-300 bg-blue-200 bg-opacity-80"
            initial="hidden"
            animate={animate === 1 ? 'visible' : 'hidden'}
            variants={contentVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col space-y-4 gap-4 h-[2500px] min-h-[2500px] overflow-y-auto"
                key={selectedProjectIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl text-center">{selectedProject.title}</h2>
                <hr className="mx-auto w-[90%] border-t-2 border-gray-500 my-4" />

                {/* Description */}
                <div className="flex">
                  <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-1/2 h-auto object-cover rounded-md" />

                  <div className="w-1/2 p-4 flex flex-col">
                    <div className="mb-4">
                      <p className="text-lg whitespace-pre-line">{selectedProject.description}</p>
                    </div>
                    <div className="text-base md:text-lg">
                      {/* Tech Stack as chips */}
                      <div className="flex flex-wrap gap-2">
                        <strong>Tech Stack:</strong>
                        {selectedProject.techStack.map((tech, index) => (
                          <span key={index} className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mx-auto w-[90%] border-t-2 border-gray-500 my-4" />
                
                {/* Features */}
                <h2 className="text-3xl font-bold">Features</h2>
                <div className="space-y-4">
                  <AnimatePresence initial={false} mode="wait">
                    {selectedProject.features
                      .slice(currentFeaturePage * featuresPerPage, (currentFeaturePage + 1) * featuresPerPage)
                      .map((feature, index) => (
                        <motion.div
                          key={`${selectedProjectIndex}-${currentFeaturePage}`}
                          className="flex flex-col items-center"
                          style={{ minHeight: '500px' }} 
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="animate"
                          exit="enter"
                          transition={{ duration: 0.5 }}
                        >
                          <img src={feature.imgUrl} alt={feature.title} className="w-[75%] h-auto object-cover rounded-md mb-6" />
                          <div className="flex flex-col text-center">
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-lg whitespace-pre-line">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                  
                  {/* Pagination Controls */}
                  <div className="flex flex-col items-center space-y-4 mt-6">
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => {
                          setDirection('prev');
                          setCurrentFeaturePage(prev => Math.max(0, prev - 1));
                        }}
                        disabled={currentFeaturePage === 0}
                        className={`px-6 py-2 rounded-md transition-colors ${
                          currentFeaturePage === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        Previous
                      </button>

                      <button
                        onClick={() => {
                          setDirection('next');
                          setCurrentFeaturePage(prev => 
                            Math.min(Math.ceil(selectedProject.features.length / featuresPerPage) - 1, prev + 1)
                          );
                        }}
                        disabled={currentFeaturePage >= Math.ceil(selectedProject.features.length / featuresPerPage) - 1}
                        className={`px-6 py-2 rounded-md transition-colors ${
                          currentFeaturePage >= Math.ceil(selectedProject.features.length / featuresPerPage) - 1
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        Next
                      </button>
                    </div>

                    <div className="flex justify-center space-x-2">
                      {[...Array(selectedProject.features.length)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentFeaturePage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentFeaturePage === index
                              ? 'bg-blue-500 transform scale-110'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to feature ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
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