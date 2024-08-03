import React from 'react';

const projectsData = [
  {
    title: 'HTML Poker with Gemini AI',
    description: `Website where you can practice playing poker with Google's Gemini AI.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    websiteUrl: 'https://gemini-poker.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p2-js-api-app',
  },
  {
    title: 'Project Management App',
    description: `Manage multiple projects and tasks of the members of your organization.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721040768/Portfolio/site2-02_lu33hu.png',
    websiteUrl: 'https://proj-management-app-clydon.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p3-react-app',
  },
  {
    title: 'Ideahub Zeta',
    description: `A social forum site where users can share ideas and talk about different kinds of topics. Threads are separated by categories.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721041107/Portfolio/site3-01_p1gzlu.png',
    websiteUrl: 'https://ideahub-zeta.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/projects/-/tree/main/p4-node-app',
  },
  {
    title: 'Credence',
    description: `A website where organizations can issue certificates to different users. The users can also embed their certificate to other sites, which when clicked, the details of the certificate will be shown.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721043147/Portfolio/site4-01_syeocj.png',
    websiteUrl: 'https://uplift-credence.netlify.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/group-5/fs-mern-app',
  },
  {
    title: 'Uplift Pasuyo Center',
    description: `A sample framework for a services app.`,
    imageUrl: 'https://res.cloudinary.com/dpzxu1ykr/image/upload/v1721030442/Portfolio/website-01_hxyjoo.jpg',
    websiteUrl: 'https://uplift-pasuyo-center-clydon.vercel.app/',
    repoUrl: 'https://gitlab.com/uplift-code-camp/students/batch-19/clydon-gamboa/homeworks/-/tree/main/hw-flex?ref_type=heads',
  },
];

const WebsitesMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <h2 className="text-2xl font-bold mb-4">Websites</h2>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-3 flex items-center mb-2"
            style={{ maxWidth: '100%', width: '100%' }}
          >
            <div className="flex-shrink-0 mr-3">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
              <p className="text-xs text-gray-600 mb-1 line-clamp-2">{project.description}</p>
              <div className="flex justify-between text-xs">
                <a
                  href={project.websiteUrl}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <a
                  href={project.repoUrl}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitesMobile;
