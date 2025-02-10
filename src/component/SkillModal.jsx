import React from 'react';
import { X } from 'lucide-react';
import css from '../assets/styles/skill.css'

const SkillsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "React.js",
    "Express.js",
    "Node.js",
    "Bootstrap",
    "MongoDB",
    "Visual Studio Code",
    "Git",
    "GitHub",
    "Netlify",
    "RESTful APIs",
    "Responsive Web Design",
    "Debugging",
    "Version Control",
    "Basic SEO",
  ];

  return (
    <div className="modal fade show" style={{ display: 'block', width: "100vw" }} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-white" id='cardd'>

          <div className="modal-header">
            <h2 className="modal-title" style={{ textDecoration: 'none' }}>What I Do 👨‍💻</h2>
            <button type="button" className="close" onClick={onClose}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal__close-btn-icon"><path d="M11.2627 28.7384L20.001 20.0001M28.7394 11.2617L19.9994 20.0001M19.9994 20.0001L11.2627 11.2617M20.001 20.0001L28.7394 28.7384" stroke="#7D8487" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
          </div>

          <div className="modal-body">
            <p>My skills as a Web Designer include, but are not limited to:</p>
            <ul className="list-unstyled">
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className="skill-item py-2"
                  style={{
                    borderBottom: '1px solid #323335;', // Bottom border for each item
                    marginBottom: '8px', // Space between items
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
