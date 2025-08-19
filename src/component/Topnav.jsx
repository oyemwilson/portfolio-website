import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../assets/styles/topnav.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TopnavFooter from './TopnavFooter';
import { Link } from 'react-router-dom';

const Topnav = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,

    });
  }, []);



  return (
    <Navbar bg="dark" id='navbar' variant="dark" expand="md" className="py-3">
      <Container fluid className="px-4">
        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <Navbar.Brand href="/" className="fw-bold">OYEM WILSON</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {/* <span className="navbar-toggler-icon"></span> */}
          <div class="hamburger__line hamburger__line--one"></div>
          <div class="hamburger__line hamburger__line--two"></div>
          <div class="hamburger__line hamburger__line--three"></div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <div data-aos="fade-left" data-aos-delay="300">
              <Nav.Link as={Link} to="/featured-work" className="me-3" data-aos="fade-left" data-aos-delay="300">
                Work
              </Nav.Link>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <Nav.Link as={Link} to="/about" className="me-3" data-aos="fade-left" data-aos-delay="400">
                About
              </Nav.Link>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <Nav.Link as={Link} to="https://docs.google.com/document/d/1pELZlC6sAyu0RQvoVu87GfbLQUONW9oFk1mjIo2TrSQ/edit?usp=sharing" target="_blank" className="me-3">Resume</Nav.Link>
            </div>
            {/* <div data-aos="fade-left" data-aos-delay="600">
            <Nav.Link href="#" className="me-3">More</Nav.Link>
          </div> */}
            <div data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0">
              <a href="mailto:oyemwilson1@gmail.com">
                <Button variant="light" className="topnav-button">Get in Touch</Button>
              </a>

            </div>
          </Nav>
          <TopnavFooter />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
