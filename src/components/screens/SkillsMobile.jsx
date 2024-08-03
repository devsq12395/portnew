import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const SkillsMobile = () => {
  return (
    <div className="relative h-full w-full p-8 flex flex-col justify-center items-center" style={{ height: '100vh' }}>
      <div className="flex flex-col lg:flex-row w-full" style={{ width: '60%' }}>
        <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold">My Web Development Journey</h2>
          <p className="mt-4 text-sm">
            I started my web development journey delving into HTML and CSS.
            As I progressed, I ventured into JavaScript, enhancing my websites with interactivity and dynamic content.
            I joined Uplift Code Camp to further enhance my skills by learning in-demand skills and technologies like ReactJS.
            Now I have the set of skills needed to create any website you wish.
          </p>
        </div>
        <div className="border-l border-gray-300 mx-4 hidden lg:block"></div>
        <div className="lg:w-1/2 lg:pl-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap mt-4 space-y-2">
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faHtml5} size="2x" className="mr-2 text-orange-500" />
              <span className="text-sm">HTML</span>
            </div>
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" className="mr-2 text-blue-500" />
              <span className="text-sm">CSS</span>
            </div>
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faJsSquare} size="2x" className="mr-2 text-yellow-500" />
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faReact} size="2x" className="mr-2 text-blue-500" />
              <span className="text-sm">ReactJS</span>
            </div>
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faNodeJs} size="2x" className="mr-2 text-green-500" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="w-1/2 flex items-center mb-2">
              <FontAwesomeIcon icon={faDatabase} size="2x" className="mr-2 text-green-500" />
              <span className="text-sm">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMobile;
