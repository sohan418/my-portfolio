import { forwardRef } from 'react';
import { FaDownload, FaFilePdf, FaTools, FaCode, FaDatabase, FaCloud, FaAward, FaCertificate } from 'react-icons/fa';
import './Resume.css';

const Resume = forwardRef((props, ref) => {
  // Replace with your actual resume file path in the public folder
  const resumePdf = "/resume.pdf";
  
  const skills =[
    {
      category: 'Programming',
      icon: <FaCode />,
      items: ['Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaCode />,
      items: ['Flask','Fast API', 'React.js', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      items: ['MongoDB', 'MySQL']
    },
    {
      category: 'Cloud Services',
      icon: <FaCloud />,
      items: ['AWS (Amazon Bedrock, S3, SQS, Lambda, Transcribe)',
        'Azure (Speech-to-Text, Text-to-Speech, Blob Storage)'

      ]
    },
    {
      category: 'Development Tools',
      icon: <FaTools />,
      items: ['Git', 'GitHub', 'VS Code']
    }
  ];;

  const certifications = [
    {
      title: 'Full Stack Development with Python Flask',
      issuer: 'Actecal Pvt. Ltd',
      date: 'July 2022',
      icon: <FaCertificate />
    },
    {
      title: 'MongoDB Python Developer Path',
      issuer: 'MongoDB University',
      date: 'September 2024',
      icon: <FaCertificate />
    },
    {
      title: 'Amazon Bedrock Getting Started',
      issuer: 'AWS Training',
      date: 'August 2024',
      icon: <FaCertificate />
    },
    {
      title: 'Employee of the Quarter',
      issuer: 'Valuenable Pvt. Ltd',
      date: '2024',
      icon: <FaAward />,
      description: 'Honored by client for outstanding contribution and performance'
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
          
          {/* Certifications Section */}
          <div className="certifications-container">
            <h3><FaAward /> Certifications & Awards</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon">
                    {cert.icon}
                  </div>
                  <div className="certification-details">
                    <h4>{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    {cert.description && (
                      <p className="cert-description">{cert.description}</p>
                    )}
                  </div>
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
