import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactMobile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mdknkjqg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Error sending email.');
      }
    })
    .catch(error => {
      setStatus('Error sending email.');
    });
  };

  return (
    <div className="relative h-full w-full p-8 flex flex-col justify-center items-center" style={{ height: '100vh' }}>
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-2 text-xs focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-2 text-xs focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-2 text-xs focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border border-gray-300 rounded-md shadow-sm p-2 text-xs focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-xs"
            >
              Mail Me
            </button>
          </div>
        </form>
        {status && <p className="mt-2 text-center text-xs">{status}</p>}
      </div>
      <div className="border-t border-gray-300 my-6 w-full lg:hidden"></div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2 text-gray-500" />
            <span className="text-sm">gamboaclydon@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} size="lg" className="mr-2 text-gray-500" />
            <span className="text-sm">+63 960 328 2255</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-2 text-gray-500" />
            <a href="https://www.linkedin.com/in/clydongamboa/" className="text-sm text-gray-500 hover:text-gray-900">LinkedIn</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2 text-gray-500" />
            <a href="https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa" className="text-sm text-gray-500 hover:text-gray-900">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
