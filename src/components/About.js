import React from 'react';
import { motion } from 'framer-motion';
import { CTA_ACTIONS } from '../constants/contact';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: '📱',
      title: 'Mobile Excellence',
      description: 'Native-level performance cross-platform apps with Flutter & React Native'
    },
    {
      icon: '⚙️',
      title: 'Full Stack Mastery',
      description: 'End-to-end development from frontend interfaces to backend infrastructure'
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      description: 'Business process automation and intelligent workflow systems'
    },
    {
      icon: '🎨',
      title: 'Design Thinking',
      description: 'User-centered design approach with strong UI/UX fundamentals'
    }
  ];

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

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>About Me</h2>
          <p>Professional background and approach</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p className="about-intro" variants={itemVariants}>
              I'm a software engineer specializing in building high-performance mobile applications,
              modern web platforms, and intelligent automation systems that drive real business value.
            </motion.p>

            <motion.p variants={itemVariants}>
              With experience across the full technology stack—from Flutter and React Native for
              mobile, to MERN and WordPress for web—I've developed a comprehensive understanding of
              how to architect solutions that scale. My work spans diverse industries, from fintech
              trading platforms to healthcare management systems.
            </motion.p>

            <motion.p variants={itemVariants}>
              I approach every project with a focus on user experience, system performance, and
              business impact. Rather than just writing code, I solve problems: optimizing workflows,
              automating processes, and building products that users love to interact with.
            </motion.p>

            <motion.p variants={itemVariants}>
              My philosophy is simple: <strong>great software is invisible—it makes complex tasks feel
              effortless.</strong> Whether I'm designing a mobile interface, architecting a backend
              system, or automating business processes, the goal is always the same: create solutions
              that deliver measurable impact.
            </motion.p>

            <motion.div className="about-cta" variants={itemVariants}>
              <button className="btn btn-primary" onClick={CTA_ACTIONS.letWorkTogether}>Let's Work Together</button>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
