import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import MyContext from "../../MyContext";

const AboutMe = () => {
  const { animate } = useContext(MyContext);

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  const profileImageVariants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <motion.div
      className="relative h-full w-full py-10 grid gap-4 md:grid-cols-2"
      initial="hidden"
      animate={animate === 1 ? 'visible' : 'hidden'}
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dpzxu1ykr/image/upload/v1722672401/sl_101121_46080_04_enju9p.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center col-span-2 ml-3 md:col-span-1 md:self-start"
        variants={containerVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Hello, I'm</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">Clydon Gamboa</h2>
        <div className="border-t-2 border-gray-300 my-4 w-1/2"></div>
        <p className="text-lg md:text-xl">Professional Software Engineer</p>
        <p className="text-lg md:text-xl">Website designing and building</p>
        <div className="border-t-2 border-gray-300 my-4 w-1/2"></div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/clydongamboa/" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.facebook.com/clydon.gamboa/" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <div className="mt-4">
          <a
            href="https://www.dropbox.com/scl/fi/kiw3ikwjssmidoqvfy1zj/resume.docx?rlkey=5xpe334rh4omstdev7o4pyknv&dl=1"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center md:items-end md:justify-end col-span-2 md:col-span-1 p-11"
        variants={profileImageVariants}
      >
        <img
          src="https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721036605/Portfolio/pic-002_qpjtfu.png"
          alt="Profile"
          className="min-w-96 min-h-96 md:min-w-12 md:min-h-12 object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
