import { forwardRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: [
        'Led a team of 5 developers to build a scalable microservices architecture using Node.js and React',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored junior developers and conducted code reviews'
      ],
      icon: <FaBriefcase />,
      type: 'work'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2022',
      description: [
        'Developed and maintained web applications using React and Python',
        'Optimized database queries improving application performance by 30%',
        'Collaborated with cross-functional teams to deliver features on schedule'
      ],
      icon: <FaBriefcase />,
      type: 'work'
    },
    {
      id: 3,
      title: 'Master of Computer Science',
      company: 'Stanford University',
      period: '2017 - 2019',
      description: [
        'Specialized in Artificial Intelligence and Machine Learning',
        'Thesis on "Advanced Neural Network Architectures for Natural Language Processing"',
        'Graduated with Distinction'
      ],
      icon: <FaGraduationCap />,
      type: 'education'
    },
    {
      id: 4,
      title: 'Bachelor of Technology in Computer Science',
      company: 'Indian Institute of Technology',
      period: '2013 - 2017',
      description: [
        'Focus on Software Engineering and Data Structures',
        'President of Coding Club',
        'Graduated with First Class Honors'
      ],
      icon: <FaGraduationCap />,
      type: 'education'
    }
  ];

  return (
    <section id={props.id} ref={ref} className="experience-section">
      <div className="container">
        <h2>My Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${exp.type}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
