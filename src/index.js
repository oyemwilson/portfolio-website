import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Topnav from './component/Topnav';
import Footer from './component/Footer';
import LandingPage from './screens/LandingPage';
import About from './screens/About';
import FeaturedWork from './screens/FeaturedWork';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './bootstrap.min.css'
import 'aos/dist/aos.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Topnav /> */}
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/featured-work" element={<FeaturedWork />} />
  </Routes>
  {/* <Footer /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
