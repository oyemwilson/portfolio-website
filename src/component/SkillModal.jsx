import React from 'react';
import { X } from 'lucide-react';
import '../assets/styles/skill.css';

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
    <div 
      className="modal fade show d-block" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1050,
        overflow: "auto"
      }} 
      aria-modal="true" 
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered mw-100 m-2 m-md-3 m-lg-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="modal-content bg-dark text-white mx-auto" 
          style={{ 
            maxWidth: "900px",
            width: "100%"
          }}
        >
          {/* Modal Header */}
          <div className="modal-header d-flex justify-content-between align-items-center p-3 p-md-4">
            <h2 
              className="modal-title m-0" 
              style={{ 
                textDecoration: 'none',
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                lineHeight: "1.3"
              }}
            >
              What I Do 👨‍💻
            </h2>
            <button 
              type="button" 
              className="close bg-transparent border-0 p-0 m-0" 
              onClick={onClose}
              aria-label="Close"
              style={{ cursor: "pointer" }}
            >
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "clamp(30px, 8vw, 40px)",
                  height: "clamp(30px, 8vw, 40px)"
                }}
              >
                <path 
                  d="M11.2627 28.7384L20.001 20.0001M28.7394 11.2617L19.9994 20.0001M19.9994 20.0001L11.2627 11.2617M20.001 20.0001L28.7394 28.7384" 
                  stroke="#7D8487" 
                  strokeWidth="2.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-3 p-md-4">
            <p 
              className="mb-4"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.1rem)",
                lineHeight: "1.5"
              }}
            >
              My skills as a Web Designer include, but are not limited to:
            </p>
            
            {/* Skills Grid - Responsive columns */}
            <div className="container-fluid px-0">
              <div className="row">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="col-12 col-md-6 col-lg-4"
                  >
                    <div
                      className="skill-item py-2 px-3"
                      style={{
                        borderBottom: '1px solid #323335',
                        marginBottom: '8px',
                        fontSize: "clamp(0.95rem, 2.5vw, 1rem)",
                        minHeight: "44px",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills count */}
            <div 
              className="mt-4 pt-3 text-center"
              style={{
                borderTop: '1px solid #323335',
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                color: "#7D8487"
              }}
            >
              <span>Total: {skills.length} skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;