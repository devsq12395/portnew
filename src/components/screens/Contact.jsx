import React, { useState, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import MyContext from '../../MyContext';

const Contact = () => {
  const { animate } = useContext(MyContext);
  const formRefs = useRef([]);
  const contactRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mdknkjqg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Email sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          setStatus('Error sending email.');
        }
      })
      .catch(() => {
        setStatus('Error sending email.');
      });
  };

  return (
    <div 
    className="w-full"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dpzxu1ykr/image/upload/v1722672401/sl_101121_46080_04_enju9p.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <motion.div
        className="relative h-full w-full p-8 flex flex-col justify-center items-center"
        style={{ height: '100vh' }}
        initial="hidden"
        animate={animate === 1 ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col lg:flex-row w-full max-w-screen-lg bg-white bg-opacity-80 p-8 rounded-md shadow-lg">
          <motion.div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0" variants={itemVariants}>
            <h2 ref={(el) => (formRefs.current[0] = el)} className="text-3xl font-bold">Send me a message</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Mail Me
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-lg">{status}</p>}
          </motion.div>
          <div className="border-l border-gray-300 mx-4 hidden lg:block"></div>
          <motion.div className="lg:w-1/2 lg:pl-4" variants={itemVariants}>
            <h2 ref={(el) => (contactRefs.current[0] = el)} className="text-3xl font-bold">Contact Details</h2>
            <div className="flex flex-col mt-4 space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-2 text-gray-500" />
                <span className="text-lg md:text-xl">gamboaclydon@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} size="2x" className="mr-2 text-gray-500" />
                <span className="text-lg md:text-xl">+63 960 328 2255</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-2 text-gray-500" />
                <a href="https://www.linkedin.com/in/clydongamboa/" className="text-lg md:text-xl text-gray-500 hover:text-gray-900">LinkedIn</a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGithub} size="2x" className="mr-2 text-gray-500" />
                <a href="https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa" className="text-lg md:text-xl text-gray-500 hover:text-gray-900">GitHub</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
