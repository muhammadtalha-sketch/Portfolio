import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const phoneNumber = CONTACT_INFO.phoneLink.replace('+', '');
    const message = encodeURIComponent('Hi Talha, I would like to discuss a project with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.div
        className="footer-cta-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.button
            onClick={handleWhatsApp}
            className="btn btn-whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="whatsapp-icon">💬</span>
            Get in Touch via WhatsApp
          </motion.button>
        </div>
      </motion.div>

      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-section">
              <motion.div
                className="footer-brand"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/assets/logo.png" alt="MT Logo" className="footer-logo" />
              </motion.div>
              <p>Building digital products that solve real problems</p>
            </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#expertise">Mobile Development</a>
              </li>
              <li>
                <a href="#expertise">Web Development</a>
              </li>
              <li>
                <a href="#expertise">AI Automation</a>
              </li>
              <li>
                <a href="#expertise">UI/UX Design</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Muhammad Talha. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
