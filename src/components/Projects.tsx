import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import Linework from '../assets/linework.jpeg'
import Ikigai from '../assets/ikigai.png'
import Backpack from '../assets/backpack.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Linework",
      category: "web development",
      image: Linework,
      description: "A platform connecting freelancers with clients, featuring secure payments and project management tools.",
      technologies: ["React", "Node.js", "MongoDB", "Web3"],
      liveLink: "https://linework.online/",
      githubLink: ""
    },
    {
      title: "Ikigai",
      category: "web development",
      image: Ikigai,
      description: "An AI-powered personal assistant application with natural language processing capabilities.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
      liveLink: "https://ikigaibot-chi.vercel.app/",
      githubLink: ""
    },
    {
      title: "Backpack Exchange",
      category: "web development",
      image: Backpack,
      description: "A cryptocurrency exchange platform with advanced trading features and secure wallet integration.",
      technologies: ["React", "Redux", "Node.js", "WebSockets"],
      liveLink: "",
      githubLink: "https://github.com/aljithkj02/backpack-Exchange/"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Projects" />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {['all', 'web development'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full ${
                    activeFilter === filter 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors shadow-sm`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          <FaGithub className="mr-2" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;