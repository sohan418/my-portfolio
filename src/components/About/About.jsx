import { forwardRef } from 'react';
import './About.css';

const About = forwardRef((props, ref) => {
  const skills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 40 },
    { name: 'Python', level: 85 },
    // { name: 'Machine Learning', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 50 },
  ];

  return (
    <section id={props.id} ref={ref} className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Sohan Singh Bisht, a passionate Software Developer and AI Engineer with a strong foundation in building scalable web applications and implementing machine learning solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              With experience in both front-end and back-end development, I bring a well-rounded perspective to every project. My goal is to build applications that are not only functional but also provide an exceptional user experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I'm always open to new opportunities and collaborations.
            </p>
          </div>
          
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
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

About.displayName = 'About';

export default About;
