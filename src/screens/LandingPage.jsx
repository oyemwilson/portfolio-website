import React from "react";
import style from "../assets/styles/landingpage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Topnav from '../component/Topnav';
import Footer from "../component/Footer";
import { Link } from 'react-router-dom';
import SkillsModal from "../component/SkillModal";

const LandingPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Topnav/>
      <div className="home-container">
        <div data-aos="fade-down" data-aos-delay="200">
          <h1 className="headline">
            <span style={{ display: "inline-block" }}>W</span>
            <span style={{ display: "inline-block" }}>e</span>
            <span style={{ display: "inline-block" }}>b</span>
            <span className="space">&nbsp;</span>
            <span className="line-break"></span>
            <span style={{ display: "inline-block" }}>D</span>
            <span style={{ display: "inline-block" }}>e</span>
            <span style={{ display: "inline-block" }}>v</span>
            <span style={{ display: "inline-block" }}>e</span>
            <span style={{ display: "inline-block" }}>l</span>
            <span style={{ display: "inline-block" }}>o</span>
            <span style={{ display: "inline-block" }}>p</span>
            <span style={{ display: "inline-block" }}>e</span>
            <span style={{ display: "inline-block" }}>r</span>
            <span style={{ display: "inline-block" }}>.</span>
          </h1>
        </div>
        <div data-aos="fade-up-left"></div>
        <div className="cards">
          <div className="row">
            {/* About Me Card */}
            <div id="card" className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up-left" data-aos-delay="200">
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body-1">
                    <div className="card-title-1">
                      <h1>Hey, I'm Wilson</h1>
                      <span><img alt="hand wave" className="bio__hand-wave" src="https://res.cloudinary.com/kadet/image/upload/f_webp/q_100/v1675420630/petra-portfolio/wave_qhuoai.png" /></span>
                    </div>
                    <p className="card-text-1">I believe that great design starts with an obsession to meet user need.</p>
                    <span>
                      <img alt="arrow" id="arrow-image" className="position-absolute end-0 me-5" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/arrow-right_m6ehs0.svg" />
                    </span>
                    <span>
                      <p className="card-text-1-sm" style={{opacity: "0"}}>Learn More About Me</p>
                    </span>
                    <div>
                      <p className="text-hover-1" style={{ opacity: '0' }}>Learn More About Me</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study Card */}
            <div id="card" className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up-left" data-aos-delay="400">
              <Link to="/featured-work" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card" id="card2" style={{ width: "100%" }}>
                  <div className="card-body-2">
                    <p className="card-title-2">Featured Work</p>
                    <h1 className="card-text-2">View My Case Study</h1>
                    <div>
                      <img alt="screens" src="https://res.cloudinary.com/kadet/image/upload/f_webp/v1675420631/petra-portfolio/case-study-screens_it9acy.png" />
                    </div>
                  </div>
                  <span>
                    <img alt="arrow" id="arrow-image2" className="position-absolute end-0 me-5" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/arrow-right_m6ehs0.svg" />
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                {/* Web Design Card */}
                <div id="card" className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up-left" data-aos-delay="600">
                  <Link to="/featured-work" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card" id="card3" style={{ width: "100%" }}>
                      <div className="card-body-3">
                        <img alt="folder" className="designs__icon" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/folder_bdbtzn.svg" />
                        <span><h2 className="card-text-3-hover">View</h2></span>
                        <h2 className="card-text-3">My Web Design</h2>
                      </div>
                      <img alt="arrow" id="arrow-image3" className="position-absolute end-0" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/arrow-right_m6ehs0.svg" />
                    </div>
                  </Link>
                </div>

                {/* Medium Articles Card */}
                <div id="card" className="col-lg-6 col-md-6 col-sm-12 medium-article" data-aos="fade-up-left" data-aos-delay="800">
                  <a href="https://medium.com/@oyemwilson1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card" style={{ width: "100%" }}>
                      <div className="card-body-4">
                        <img alt="medium" className="linkedin__icon" src="https://res.cloudinary.com/dhehm9bti/image/upload/v1711157909/Vector_5_u9c80x.svg" />
                        <h2 className="text-hover-4">My Medium Articles</h2>
                        <img alt="arrow" className="card__arrow linkedin__arrow" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421670/petra-portfolio/arrow-link_y23sqp.svg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div id="card" className="col-lg-6 col-md-6 col-sm-12 what-i-do" data-aos="fade-up-left" data-aos-delay="1000"   onClick={() => setIsModalOpen(true)}  // Add this line
  style={{ cursor: 'pointer' }} >
              {/* <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body-5 my-auto">
                    <p className="card-title-5">WHAT I DO</p>
                    <div className="row" id="skill-container">
                      <div className="col-lg-4 col-md-4 col-sm-12 text-center" id="container-5">
                        <h2 className="skill-text">Web Designs</h2>
                        <div className="image-container">
                          <img src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421672/petra-portfolio/skill-ux_w1krz3.svg" alt="Web Designs" className="skills__item-icon mx-auto d-block" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 text-center" id="container-5">
                        <h2 className="skill-text">Version Control</h2>
                        <div className="image-container">
                          <img src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421673/petra-portfolio/skill-wireframing_qd7mki.svg" alt="Version Control" className="skills__item-icon mx-auto d-block" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 text-center" id="container-5">
                        <h2 className="skill-text">Technical Writing</h2>
                        <div className="image-container">
                          <img src="https://res.cloudinary.com/kadet/image/upload/q_100/v1677590257/petra-portfolio/ph_pen-nib_vhmzyc.svg" alt="Technical Writing" className="skills__item-icon mx-auto d-block" />
                        </div>
                      </div>
                    </div>
                    <h2 className="card-text-5">See My Skills</h2>
                  </div>
                  <img alt="expand" className="arrow-5" src="https://res.cloudinary.com/kadet/image/upload/q_100/v1675421671/petra-portfolio/expand_hj7nwu.svg" />
                </div>
              {/* </Link> */}
            </div>

          </div>
        </div>
      </div>

      <SkillsModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <Footer />
    </>
  );
};

export default LandingPage;