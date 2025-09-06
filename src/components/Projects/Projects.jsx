import { useState, forwardRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chat Application',
      description: 'A real-time chat application with AI-powered responses using React, Node.js, and OpenAI API.',
      tags: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
      category: 'ai',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=AI+Chat+App',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      tags: ['React', 'Express', 'MongoDB', 'Stripe'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=E-commerce+Platform',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Image Recognition App',
      description: 'Mobile application that uses machine learning to identify objects in real-time using the device camera.',
      tags: ['React Native', 'TensorFlow.js', 'Mobile'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Image+Recognition+App',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description: 'A responsive task management dashboard with drag-and-drop functionality and team collaboration features.',
      tags: ['React', 'Redux', 'Firebase', 'Material-UI'],
      category: 'web',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Task+Dashboard',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Sentiment Analysis Tool',
      description: 'Web application that analyzes sentiment in text using natural language processing techniques.',
      tags: ['Python', 'Flask', 'NLTK', 'React'],
      category: 'ai',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Sentiment+Analysis',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts, nutrition, and fitness goals with data visualization.',
      tags: ['React Native', 'GraphQL', 'MongoDB', 'Node.js'],
      category: 'mobile',
      image: 'https://via.placeholder.com/400x250/2d3748/ffffff?text=Fitness+Tracker',
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'mobile', name: 'Mobile Apps' }
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
