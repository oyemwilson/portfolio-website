import React, { useState, useEffect } from 'react';
import '../assets/styles/featuredwork.css';
import '../assets/styles/project-description.css'
import Topnav from '../component/Topnav';
import { Link } from 'react-router-dom';

const UIDesigns = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [descriptionPosition, setDescriptionPosition] = useState('bottom'); // 'top' or 'bottom'

const slides = [
  {
    src: "/assets/images/voicesoncanvas.webp",
    title: "VoicesOnCanvas Marketplace",
    description: "A full e-commerce art marketplace with admin, seller, and buyer dashboards. Supports product uploads, artist profiles, secure checkout, and integrated Paystack/PayPal payments.",
    stack: ["React.js, Node.js, Express, MongoDB, Paystack, PayPal API"],
    alt: "VoicesOnCanvas art marketplace",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://voicesoncanvas.africa/"
  },

  {
    src: "/assets/images/jotpad.webp",
    title: "JotPad Note-Taking App",
    description: "A clean and responsive note-taking application with a simple UI for writing, saving, and managing notes across devices. Built for speed and minimalism.",
    stack: ["React.js, Tailwind CSS"],
    alt: "JotPad note taking app",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://jotpad-5bj4.onrender.com/"
  },

  {
    src: "/assets/images/payperlesspanda.webp",
    title: "PayPerless Panda Receipt Generator",
    description: "A receipt generator tool that allows users to create, customize, and print professional receipts using ready-made templates.",
    stack: ["React.js, Tailwind CSS"],
    alt: "PayPerless Panda receipt generator",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://payperlesspanda.onrender.com/"
  },

  {
    src: "/assets/images/patientdashboard.webp",
    title: "Patient Health Dashboard",
    description: "Interactive health analytics dashboard that visualizes vitals and lab results using dynamic charts and patient filters.",
    stack: ["React.js, Recharts, Sparklines"],
    alt: "Patient health dashboard",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://patient-dash.onrender.com/"
  },

  {
    src: "/assets/images/synai.png",
    title: "SynAI Product Showcase",
    description: "A visually rich product landing experience with animated sections, interactive CTAs, and a fully mobile-first layout.",
    stack: ["React.js, Tailwind CSS"],
    alt: "SynAI product showcase UI",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://synai-bn3y.onrender.com"
  },

  {
    src: "/assets/images/mockdatagenerator.png",
    title: "Mock Data Generator",
    description: "A lightweight developer tool for generating realistic mock datasets with customizable fields and one-click JSON export.",
    stack: ["Next.js, React.js"],
    alt: "Mock data generator app",
    size: { width: '40.3vw', height: '23.7vw' },
    link: "https://mockdatageneratorr.onrender.com"
  },

  {
    src: "/assets/images/work2.png",
    title: "JobX Job Portal",
    description: "A multi-role job platform for job seekers, employers, and applicants. Supports job posting, applications, and profile management.",
    stack: ["React.js, Node.js, Express, MongoDB"],
    alt: "JobX multi role job portal",
    size: { width: '41.3vw', height: '23.7vw' },
    link: "https://jobx-uu5x.onrender.com"
  },

  {
    src: "/assets/images/work3.png",
    title: "HR Management System",
    description: "MERN-based HR tool with admin, HR staff, and employee roles. Features include leave approval, payroll tracking, and employee records.",
    stack: ["MongoDB, Express, React, Node.js"],
    alt: "HR management system",
    size: { width: '42.3vw', height: '23.7vw' },
    link: "https://tiide-hr.netlify.app/"
  },

  // {
  //   src: "/assets/images/work4.png",
  //   title: "Mini User Search App",
  //   description: "A simple SPA that fetches user data from an API and provides instant, real-time search by name or username.",
  //   stack: "React.js, JavaScript, REST API",
  //   alt: "Mini searchable user list app",
  //   size: { width: '43.3vw', height: '23.7vw' },
  //   link: "https://tiide-mini.netlify.app/"
  // }
];


  // Track when all images are loaded
  useEffect(() => {
    if (loadedImages.size === slides.length) {
      setImagesLoaded(true);
    }
  }, [loadedImages, slides.length]);

  // Handle image load
  const handleImageLoad = (src) => {
    setLoadedImages((prev) => new Set([...prev, src]));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Toggle description position
  const toggleDescriptionPosition = () => {
    setDescriptionPosition(prev => prev === 'bottom' ? 'top' : 'bottom');
  };

  return (
    <>
      {!imagesLoaded && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading Projects...</p>
        </div>
      )}
      <main className={`p-ui-designs ${!imagesLoaded ? 'hidden' : ''}`}>
        <div className="left">
          <button className="left__back-btn">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/kadet/image/upload/v1680473864/petra-portfolio/arrow-back_nldmj8.svg"
                alt="back arrow"
              />
            </Link>
          </button>
          <div className="socials">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/oyemwilson/"
            >
              <figure>
                <img
                  src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421672/petra-portfolio/linkedin_v1puye.svg"
                  alt="LinkedIn"
                  className="socials__icon"
                />
              </figure>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="mailto:oyemwilson1@gmail.com"
            >
              <figure>
                <img
                  src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/email_v8gsl8.svg"
                  alt="Email"
                  className="socials__icon"
                />
              </figure>
            </a>
          </div>
          
          {/* Toggle button for description position */}
          {/* <button 
            onClick={toggleDescriptionPosition}
            className="description-toggle-btn btn btn-outline-light btn-sm position-absolute"
            style={{ bottom: '100px', left: '20px' }}
          >
            Move Description {descriptionPosition === 'bottom' ? '↑ Top' : '↓ Bottom'}
          </button> */}
        </div>

        <div className="center">
          <h2 className="center__title paragraph--1 mx-auto text-center mb-4" id='carousel-header'>
            PROJECTS
          </h2>
          
          {/* Project description at the TOP (conditionally rendered) */}
          {descriptionPosition === 'top' && (
            <div className="project-description-container glass-card mb-4">
              <div className="project-description-content">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="project-title mb-0">
                    {slides[activeIndex].title}
                  </h3>
                  <span className="badge bg-primary">
                    Project {activeIndex + 1} of {slides.length}
                  </span>
                </div>
                
                <p className="project-description mb-3">
                  {slides[activeIndex].description}
                </p>
                
                <div className="d-flex flex-wrap align-items-center mb-2">
                  <span className="tech-stack-label me-2">Tech Stack:</span>
                  <div className="d-flex flex-wrap gap-2">
                    {slides[activeIndex].stack.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <a 
                    href={slides[activeIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View Live Project
                  </a>
                  <small className="text-muted">
                    Click image for full view
                  </small>
                </div>
              </div>
            </div>
          )}

          <div className="carousel">
            <div className="carousel__control">
              <button className="carousel__control-btn prev" onClick={handlePrev} disabled={activeIndex === 0}>
                <span className="paragraph--3">PREV</span>
                <span className="carousel__control-line"></span>
              </button>
            </div>
            
            <div className="carousel__slider" style={{ width: slides[activeIndex].size.width, height: slides[activeIndex].size.height }}>
              {slides.map((slide, index) => (
                <figure
                  key={index}
                  className={`carousel__slide ${activeIndex === index ? 'active' : 'inactive'}`}
                  style={{
                    transform: `translate(${(index - activeIndex) * 60}vw, ${(index - activeIndex) * -40}vw)`,
                  }}
                >
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="carousel__slide-image"
                      src={slide.src}
                      alt={slide.alt}
                      style={{ width: slide.size.width, height: slide.size.height }}
                      onLoad={() => handleImageLoad(slide.src)}
                    />
                  </a>
                </figure>
              ))}
            </div>
            
            <div className="carousel__control">
              <button className="carousel__control-btn next" onClick={handleNext} disabled={activeIndex === slides.length - 1}>
                <span className="carousel__control-line"></span>
                <span className="paragraph--3">NEXT</span>
              </button>
            </div>
          </div>

          {/* Project description at the BOTTOM (conditionally rendered) */}
          {descriptionPosition === 'bottom' && (
            <div className="project-description-container glass-card mt-4">
              <div className="project-description-content">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="project-title mb-0">
                    {slides[activeIndex].title}
                  </h3>
                  <span className="badge bg-primary">
                    Project {activeIndex + 1} of {slides.length}
                  </span>
                </div>
                
                <p className="project-description mb-3">
                  {slides[activeIndex].description}
                </p>
                
                <div className="d-flex flex-wrap align-items-center mb-2">
                  <span className="tech-stack-label me-2">Tech Stack:</span>
                  <div className="d-flex flex-wrap gap-2">
                    {slides[activeIndex].stack.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <a 
                    href={slides[activeIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View Live Project
                  </a>
                  <small className="text-muted">
                    Click image for full view
                  </small>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right">
          <div className="right__text">
            <p className="right__subtitle paragraph--2" id='shot'>
              Shot <span className="right__subtitle--span">{activeIndex + 1}</span> of {slides.length}
            </p>
            <h3 className="right__title subtitle--1">
              Creativity & <br />
              Innovation
            </h3>
          </div>
          <div className="right__block"></div>
        </div>
      </main>
    </>
  );
};

export default UIDesigns;