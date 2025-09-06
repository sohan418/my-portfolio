import { useState, forwardRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: 'AI-Powered Chat Application',
    //   description: 'A real-time chat application with AI-powered responses using React, Node.js, and OpenAI API.',
    //   tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
    //   category: 'ai',
    //   image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=AI+Chat+App',
    //   github: '#',
    //   demo: '#'
    // },
    {
      id: 1,
      title: 'My Portfolio Website',
      description: 'A personal portfolio website built with React, Flask, and MongoDB to showcase my projects, skills, and experience. Features include a dark/light theme toggle, responsive design, and a contact form with backend integration.',
      tags: ['React', 'HTML', 'CSS', 'MongoDB', 'Python Flask'],
      category: 'web',
      image: '../images/portfolio.png',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform UI design built with React. Includes product listings, shopping cart, and smooth navigation to deliver a seamless online shopping experience.',
      tags: ['React', 'HTML', 'CSS'],
      category: 'web',
      image: '../images/e-commerce-website.png',
      github: 'https://github.com/sohan418?tab=repositories',
      demo: 'https://e-commerce-sohan.netlify.app/'
    },
    {
      id: 3,
      title: 'Hospital Management System UI',
      description: 'A modern UI design for a hospital management system built with React. Features include patient management, appointment scheduling, and intuitive dashboard interfaces for healthcare staff.',
      tags: ['React', 'HTML', 'CSS'],
      category: 'web',
      image: '../images/hms-frontend.png',
      github: 'https://github.com/sohan418/hms-frontend.git',
      demo: 'https://hms-ui-by-sohan.netlify.app/'
    },
    {
      id: 4,
      title: 'Warehouse Management System UI',
      description: 'A Warehouse Management System UI design created with React, focusing on inventory management, stock tracking, and streamlined operations for efficient warehouse workflows.',
      tags: ['React'],
      category: 'web',
      image: '../images/wms-frontend.png',
      github: 'https://github.com/sohan418/wms-frontend.git',
      demo: 'https://wms-by-sohan.netlify.app/'
    },
    {
      id: 4,
      title: 'Leave Management System',
      description: 'A full-stack Leave Management System with a React frontend (built with Vite) and a Python FastAPI backend connected to a MySQL database. The system supports token-based authentication for secure login and role-based access. Features include leave request submission, approval workflows, team collaboration, and a responsive dashboard  for managing leave schedules.',
      tags: ['React', 'Vite', 'FastAPI', 'Python', 'MySQL', 'JWT'],
      category: 'web',
      image: '../images/leave-management.png',
      github: 'https://github.com/sohan418/leave-management-ui.git',
      demo: 'https://leave-management-ui.onrender.com/'
    }
    
    // {
    //   id: 4,
    //   title: 'Task Management Dashboard',
    //   description: 'A responsive task management dashboard with drag-and-drop functionality and team collaboration features.',
    //   tags: ['React', 'Redux', 'Firebase', 'Material-UI'],
    //   category: 'web',
    //   image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Task+Dashboard',
    //   github: '#',
    //   demo: '#'
    // },
    // {
    //   id: 5,
    //   title: 'Sentiment Analysis Tool',
    //   description: 'Web application that analyzes sentiment in text using natural language processing techniques.',
    //   tags: ['Python', 'Flask', 'NLTK', 'React'],
    //   category: 'ai',
    //   image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Sentiment+Analysis',
    //   github: '#',
    //   demo: '#'
    // },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id={props.id} ref={ref} className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        
        <div className="filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
