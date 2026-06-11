import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CTA_ACTIONS } from '../constants/contact';
import './Hero.css';

const Hero = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    technologies: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        projects: prev.projects < 50 ? prev.projects + 1 : 50,
        clients: prev.clients < 30 ? prev.clients + 1 : 30,
        technologies: prev.technologies < 15 ? prev.technologies + 1 : 15
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    },
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <motion.div
          className="gradient-orb"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span>
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Building Digital Products{' '}
            <span className="gradient-text">That Solve Real Problems</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Full Stack Developer | Mobile Engineer | AI Automation Specialist. I
            transform complex business challenges into scalable, intelligent
            digital solutions.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <button className="btn btn-primary" onClick={CTA_ACTIONS.startProject}>Start Your Project</button>
            <button className="btn btn-secondary" onClick={CTA_ACTIONS.viewWork}>View My Work</button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projects Delivered</div>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Clients Served</div>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-number">{stats.technologies}+</div>
              <div className="stat-label">Technologies Mastered</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="float"
        >
          <motion.div className="hero-card">
            <div className="card-glow"></div>
            <div className="gradient-orb-small"></div>
            <div className="card-content">
              {/* Personal Brand Card Content */}
              <div className="hero-info">
                {/* Premium Profile Image Section */}
                <motion.div
                  className="profile-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="profile-image-glow"></div>
                  <div className="profile-image-border">
                    <motion.img
                      src="/assets/main-pic.jpeg"
                      alt="Muhammad Talha - Professional Profile"
                      className="profile-image"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <h2 className="profile-name">Muhammad Talha</h2>
                <p className="profile-title">Software Engineer</p>

                <div className="profile-location">
                  <span>📍 Lahore, Pakistan</span>
                </div>

                <motion.div
                  className="availability-badge"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="available-dot"></span>
                  Available for Opportunities
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
