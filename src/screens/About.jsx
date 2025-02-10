import React, { useEffect } from 'react';
import "../assets/styles/about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Topnav from '../component/Topnav';
import Footer from "../component/Footer";



const About = () => {
    useEffect(() => {
        const bootstrap = require('bootstrap');
        const carouselElement = document.getElementById('carouselExampleSlidesOnly');
        const carousel = new bootstrap.Carousel(carouselElement, {
            ride: 'carousel',
        });
    }, [])
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set global animation duration (adjust as needed)
          once: false, // Set to true if you want the animation to occur only once
          offset: 10, // Offset from the trigger point
        });
      }, []);
    return (
        <div>
            <Topnav />
            <div className="about-container">
                <div className="row" id='about'>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="hero-text ">
                            <div className="card-title-about">
                                <p className='m-0' data-aos="zoom-in-up">HEY, THERE</p>
                                <span><img alt="hand wave" class="bio__hand-wave__about" data-src="https://res.cloudinary.com/kadet/image/upload/f_webp/q_/v1675420630/petra-portfolio/wave_qhuoai.png" src="https://res.cloudinary.com/kadet/image/upload/f_webp/q_100/v1675420630/petra-portfolio/wave_qhuoai.png" /></span>
                            </div>
                            <p className='hero-h1' data-aos="zoom-in-up">Software Engineer, Digital Strategist, Entrepreneur and Brand Builder</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div id="carouselExampleSlidesOnly" className="carousel-slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img src="/assets/images/img2.png" alt="First slide" style={{ width: "30vw", height: "18rem" }} />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/assets/images/IMG_9930.jpg" alt="Second slide" style={{ width: "30vw", height: "18rem" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-text" data-aos="fade-up">
                    <div>
                        <p >
                        Hi there! I am Oyem Wilson, a passionate web developer with a keen focus on building responsive, user-friendly websites and applications that solve real-world problems. My journey in web development has given me the opportunity to work in both freelance and full-time roles, where I’ve had to juggle multiple responsibilities, including front-end, back-end, and everything in between.
                        </p>
                        <p>
                        With a solid understanding of HTML, CSS, JavaScript, and various modern frameworks, I aim to create web solutions that not only meet the technical requirements but also provide an exceptional user experience. My knowledge of tools like React, Node.js, and databases allows me to build full-stack applications that are scalable and efficient.
                        </p>
                        <p>
                        Recently, I’ve also been diving into AI tools and integrations to enhance web functionality and ensure I stay ahead in the ever-evolving tech landscape. I’m excited about the intersection of technology and business, with a focus on delivering solutions that drive growth, particularly within the e-commerce and startup space.
                        </p>
                        <p>
                        When I’m not coding, I enjoy contributing to open-source projects, exploring new technologies, or helping other developers troubleshoot and improve their code. I also enjoy creating content for my personal brand, whether it's writing about web development tips or sharing insights into the latest tech trends. And when I’m not immersed in tech, you’ll likely find me reading, working on side projects, or binging the latest shows on Netflix.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default About