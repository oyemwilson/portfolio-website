import React, { useState, useEffect } from 'react';
import '../assets/styles/featuredwork.css';
import Topnav from '../component/Topnav';
import { Link } from 'react-router-dom';

const UIDesigns = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const slides = [
    {
      src: "/assets/images/voicesoncanvas.png",
      alt: "Developed a fully functional e-market website with separate admin and user interfaces. The admin panel manages products, orders, and users, while the user side [buyer/seller] allows for product posting, browsing, secure checkout, and order tracking. Integrated PayPal/paystack API for seamless payment processing. Built using React.js, Node.js, Express, and MongoDB.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://voicesoncanvas.africa/'
    },
    {
      src: "/assets/images/jotpad.png",
      alt: "Built a responsive landing page for an invoice generator using React.js and Tailwind CSS. Designed a clean, mobile-friendly interface with smooth interactions and fast load times.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://jotpad-5bj4.onrender.com/'
    },
    {
      src: "/assets/images/payperlesspanda.png",
      alt: "Built a responsive landing page for an invoice generator using React.js and Tailwind CSS. Designed a clean, mobile-friendly interface with smooth interactions and fast load times.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://payperlesspanda.onrender.com/'
    },
    {
      src: "/assets/images/patientdashboard.png",
      alt: "A Patient Health Dashboard built with React, Recharts, and Sparklines. Visualizes vitals and lab test results for multiple patients with interactive charts, per-patient filters, and a clean, accessible UI for quick clinical insights.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: "https://patient-dash.onrender.com/"
    },
    {
      src: "/assets/images/synai.png",
      alt: "Designed and developed a responsive, visually engaging landing page to showcase a product/service. Built with a mobile-first approach using  React.js and Tailwind CSS to ensure seamless user experience across all devices. Features include a clean, minimal layout, smooth animations, interactive call-to-action elements, and optimized performance for fast load times",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://synai-bn3y.onrender.com'
    },
    {
      src: "/assets/images/mockdatagenerator.png",
      alt: "A lightweight web application built with Next.js that allows users to generate customizable mock data quickly and efficiently. it enables you to produce realistic, random datasets with a few simple clicks. Once the data is generated, the app provides a one-click option to download the results as a JSON file, making it easy to integrate into your testing or prototyping ",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://mockdatageneratorr.onrender.com'
    },
    {
      src: "/assets/images/work2.png",
      alt: "Created a job website with three distinct roles: user, employer, and applicant. Employers can post job listings and manage applications, while users can browse and apply for jobs. Applicants can track their application status and manage profiles. Developed using React.js, Node.js, Express, and MongoDB to ensure smooth functionality and data management.",
      size: { width: '41.3vw', height: '23.7vw' },
      link: 'https://jobx-uu5x.onrender.com'
    },
    {
      src: "/assets/images/work3.png",
      alt: "Developed a MERN-stack HR management app with three roles — admin, HR, and employee —to streamline leave requests, payroll, performance tracking, and employee records. Employees can view payslips and apply for leave, while HR manages approvals and updates.",
      size: { width: '42.3vw', height: '23.7vw' },
      link: 'https://tiide-hr.netlify.app/'
    },
    {
      src: "/assets/images/work4.png",
      alt: "Developed a simple single page application that fetches names and usernames from an API, allowing users to search through the data in real-time. Users can search by either name or username with instant results. Focusing on speed and simplicity in user interaction.",
      size: { width: '43.3vw', height: '23.7vw' },
      link: 'https://tiide-mini.netlify.app/'
    },
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
        </div>

        <div className="center">
          <h2 className="center__title paragraph--1 mx-auto" id='carousel-header'>PROJECTS</h2>
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
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" style={{ cursor: 'default' }}>
                    <span className='no-pointer'>
                      <img
                        className="carousel__slide-image"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ width: slide.size.width, height: slide.size.height }}
                        onLoad={() => handleImageLoad(slide.src)}
                      />
                      <span className="carousel__tooltip">{slide.alt}</span>
                    </span>
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