import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../assets/styles/footer.css"

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3" id='container'>
            <div className="container text-center">
                <div className="d-flex justify-content-center">
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
          </a>                </div>
                <p className="mt-5">© 2024 OYEM WILSON. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
