import { forwardRef } from 'react';
import { FaDownload, FaFilePdf, FaServer, FaFileCode, FaRobot, FaTools } from 'react-icons/fa';
import './Resume.css';

const Resume = forwardRef((props, ref) => {
  // Replace with your actual resume file path in the public folder
  const resumePdf = "src/components/Resume/resume.pdf";
  
  const skills = [
    {
      category: 'Frontend',
      icon: <FaFileCode />,
      items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux']
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['Node.js', 'Python', 'Express', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'AI/ML',
      icon: <FaRobot />,
      items: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Scikit-learn']
    },
    {
      category: 'Tools & Others',
      icon: <FaTools />,
      items: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'CI/CD']
    }
  ];

  return (
    <section id={props.id} ref={ref} className="resume-section">
      <div className="container">
        <h2>My Resume</h2>
        
        <div className="resume-container">
          <div className="resume-preview">
            <div className="resume-placeholder">
              <FaFilePdf className="pdf-icon" />
              <h3>My Professional Resume</h3>
              <p>Click the button below to view or download my resume</p>
            </div>
            
            <div className="resume-actions">
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaFilePdf /> View Resume
              </a>
              
              <a 
                href={resumePdf} 
                download="Sohan_Singh_Bisht_Resume.pdf"
                className="btn btn-outline"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
          
          <div className="skills-container">
            <h3>Skills Overview</h3>
            <p>Here are the technologies and tools I work with:</p>
            
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <div className="skill-category-header">
                    <span className="skill-icon">{skillGroup.icon}</span>
                    <h4>{skillGroup.category}</h4>
                  </div>
                  <ul>
                    {skillGroup.items.map((skill, i) => (
                      <li key={i}>
                        <span className="skill-bullet">•</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Resume.displayName = 'Resume';

export default Resume;
