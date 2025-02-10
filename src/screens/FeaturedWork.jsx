import React, { useState } from 'react';
import '../assets/styles/featuredwork.css';
import Topnav from '../component/Topnav';
import { Link } from 'react-router-dom';
const UIDesigns = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: "/assets/images/work1.png",
      alt: "Developed a fully functional e-commerce website with separate admin and user interfaces. The admin panel manages products, orders, and users, while the user side allows for product browsing, secure checkout, and order tracking. Integrated PayPal API for seamless payment processing. Built using React.js, Node.js, Express, and MongoDB.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://sprainers-1.onrender.com'
    },
    {
      src: "/assets/images/work2.png",
      alt: "Created a job website with three distinct roles: user, employer, and applicant. Employers can post job listings and manage applications, while users can browse and apply for jobs. Applicants can track their application status and manage profiles. Developed using React.js, Node.js, Express, and MongoDB to ensure smooth functionality and data management.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://jobx.onrender.com'
    },
    {
      src: "/assets/images/work3.png",
      alt: "Built a comprehensive HR management application with three user roles: admin, HR, and employee. The app streamlines all HR processes, including employee management, leave applications, payroll, and performance tracking. Employees can apply for leave, update personal information, and view payslips, while HR manages employee records and approvals. Developed using the MERN stack",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://tiide-hr.netlify.app/'
    },
    {
      src: "/assets/images/work4.png",
      alt: "Developed a simple single page application that fetches names and usernames from an API, allowing users to search through the data in real-time. Users can search by either name or username with instant results. Focusing on speed and simplicity in user interaction.",
      size: { width: '40.3vw', height: '23.7vw' },
      link: 'https://tiide-mini.netlify.app/'
    },
    // {
    //   src: "https://res.cloudinary.com/kadet/image/upload/f_webp/v1675419601/petra-portfolio/ui-shot-5_sairy2.png",
    //   alt: "Buddy Wallet",
    //   size: { width: '29.3rem', height: '46.7rem' },
    // },
    // {
    //   src: "https://res.cloudinary.com/kadet/image/upload/f_webp/v1675419602/petra-portfolio/ui-shot-6_zc9thc.png",
    //   alt: "Amalon",
    //   size: { width: '56.2rem', height: '35rem' },
    // },
    // {
    //   src: "https://res.cloudinary.com/kadet/image/upload/f_webp/v1675419603/petra-portfolio/ui-shot-7_fqktqr.png",
    //   alt: "Foodhub",
    //   size: { width: '29.3rem', height: '46.7rem' },
    // },
    // {
    //   src: "https://res.cloudinary.com/kadet/image/upload/f_webp/v1675419603/petra-portfolio/ui-shot-8_njmyg6.png",
    //   alt: "Green Splash",
    //   size: { width: '29.3rem', height: '46.7rem' },
    // },
    // {
    //   src: "https://res.cloudinary.com/kadet/image/upload/f_webp/v1675419602/petra-portfolio/ui-shot-9_dqzzin.png",
    //   alt: "A-spec Designs",
    //   size: { width: '56.2rem', height: '35rem' },
    // },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <main className="p-ui-designs">
        <div className="left">
          <button className="left__back-btn">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/kadet/image/upload/v1680473864/petra-portfolio/arrow-back_nldmj8.svg"
                alt="back arrow"
              />
            </Link>
            {/* <p className="left__title paragraph--2">Back</p> */}
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
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" style={{ cursor: 'default' }}>  {/* Using <a> instead of <Link> */}
                    <span className='no-pointer'>
                      <img
                        className="carousel__slide-image"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ width: slide.size.width, height: slide.size.height }}
                      />
                      <span className="carousel__tooltip">{slide.alt}</span>
                    </span>
                  </a>
                </figure>
              ))}

            </div>
            <div className="carousel__control">
              <button className="carousel__control-btn next" onClick={handleNext} disabled={activeIndex === 3}>
                <span className="carousel__control-line"></span>
                <span className="paragraph--3">NEXT</span>
              </button>
            </div>
          </div>
        </div>

        <div className="right ">
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
