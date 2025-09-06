import { forwardRef } from 'react';
import { FaRobot, FaBrain, FaCode, FaTools, FaMagic } from 'react-icons/fa';
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface, SiLangchain, SiPinecone } from 'react-icons/si';
import './AITools.css';

const AITools = forwardRef((props, ref) => {
  const categories = [
    {
      title: 'AI/ML Frameworks',
      icon: <FaBrain className="category-icon" />,
      items: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 80 },
        { name: 'Hugging Face', icon: <SiHuggingface />, level: 85 },
        { name: 'Scikit-learn', icon: <FaBrain />, level: 80 },
        { name: 'Keras', icon: <FaBrain />, level: 75 }
      ]
    },
    {
      title: 'LLM & Prompt Engineering',
      icon: <FaMagic className="category-icon" />,
      items: [
        { name: 'OpenAI API', icon: <SiOpenai />, level: 90 },
        { name: 'LangChain', icon: <SiLangchain />, level: 85 },
        { name: 'Prompt Patterns', icon: <FaMagic />, level: 90 },
        { name: 'Vector DBs', icon: <SiPinecone />, level: 80 },
        { name: 'Fine-tuning', icon: <FaTools />, level: 75 }
      ]
    },
    {
      title: 'Agentic AI Development',
      icon: <FaRobot className="category-icon" />,
      items: [
        { name: 'Autonomous Agents', icon: <FaRobot />, level: 85 },
        { name: 'Multi-Agent Systems', icon: <FaRobot />, level: 80 },
        { name: 'AI Workflows', icon: <FaCode />, level: 85 },
        { name: 'Tool Integration', icon: <FaTools />, level: 90 },
        { name: 'RAG Systems', icon: <FaBrain />, level: 85 }
      ]
    },
    {
      title: 'AI-Enhanced Development',
      icon: <FaCode className="category-icon" />,
      items: [
        { name: 'GitHub Copilot', icon: <FaCode />, level: 90 },
        { name: 'AI Code Review', icon: <FaTools />, level: 85 },
        { name: 'Test Generation', icon: <FaCode />, level: 80 },
        { name: 'Documentation', icon: <FaTools />, level: 90 },
        { name: 'Debugging AI', icon: <FaCode />, level: 85 }
      ]
    }
  ];

  return (
    <section id={props.id} ref={ref} className="ai-tools-section">
      <div className="container">
        <h2>AI & Development Expertise</h2>
        <p className="section-subtitle">Harnessing the power of AI to build intelligent and efficient solutions</p>
        
        <div className="ai-categories">
          {categories.map((category, index) => (
            <div key={index} className="ai-category">
              <div className="category-header">
                <div className="category-icon-container">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--accent), #6c63ff)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AITools.displayName = 'AITools';

export default AITools;
