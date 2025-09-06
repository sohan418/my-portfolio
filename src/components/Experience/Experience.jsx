import { forwardRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const Experience = forwardRef((props, ref) => {
  const experiences =  [
    // Work Experience
    {
      id: 1,
      title: 'Python Full Stack Developer',
      company: 'Actecal Pvt. Ltd',
      period: 'Feb 2023 - Present',
      description: [
        'Automated 100+ Excel-based reports using Python, Pandas, and NumPy, reducing manual work and improving reporting accuracy and speed by 60%',
        'Developed a web-based MIS dashboard for real-time insights after data uploads',
        'Led AI voice analytics integration using AWS Bedrock, improving call audit efficiency by 40%',
        'Built Python tools for automated invoice generation, streamlining financial operations',
        'Worked closely with backend, frontend, and data teams to ensure smooth project delivery',
        'Collaborated with cross-functional teams to integrate backend APIs, frontend UIs, and data pipelines',
        'Utilized AWS services like S3, Lambda, SQS, and Transcribe for scalable, cloud-based solutions'
      ],
      icon: <FaBriefcase />,
      type: 'work'
    },
    {
      id: 2,
      title: 'Internship',
      company: 'Actecal Pvt. Ltd',
      period: 'Feb 2023 - July-2023 (6 months)',
      description: [
        'Learned the basics of Python and applied them in real-world company projects',
        'Gained hands-on experience in debugging and troubleshooting application issues',
        'Explored frontend development using HTML, CSS, JavaScript, and React.js',
        'Worked with MySQL and MongoDB for backend data handling',
        'Collaborated on live projects, understanding full-stack workflows and team coordination'
      ],
      icon: <FaBriefcase />,
      type: 'work'
    },
    {
      id: 4,
      title: 'Diploma in Computer Science',
      company: 'Government Polytechnic Lohaghat',
      period: '',
      description: [
        'Grade – 85%'
      ],
      icon: <FaGraduationCap />,
      type: 'education'
    },
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
