import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Automation Engineer',
      company: 'Ingenious Concepts',
      date: 'January 2026 – April 2026',
      description: [
        'Designed and developed custom WordPress websites and solutions',
        'Engineered theme and plugin customizations for enterprise clients',
        'Implemented SEO optimization and Firebase integration',
        'Delivered end-to-end solutions for healthcare and financial sectors',
        'Managed client relationships and project timelines'
      ],
      projects: 'Key Projects: Sehat Makaan, PCG, Sygnifin'
    },
    {
      title: 'Web Developer',
      company: 'DirectFN',
      date: 'January 2025 – September 2025',
      description: [
        'Developed full-stack stock trading platform with real-time data',
        'Built accounting and inventory management systems',
        'Architected React frontend with Node.js backend',
        'Designed SQL databases and Docker containerization',
        'Implemented responsive UI for complex financial dashboards'
      ],
      projects: 'Tech Stack: React, Node.js, MySQL, Docker'
    },
    {
      title: 'Full Stack Developer',
      company: 'Lemon Studios',
      date: 'July 2023 – October 2024',
      description: [
        'Developed mobile apps using Flutter and React Native',
        'Built MERN stack web applications for multiple clients',
        'Implemented responsive designs and interactive UIs',
        'Collaborated with design and product teams',
        'Delivered 10+ production applications'
      ],
      projects: 'Focus: Mobile & Web Development, MERN Stack'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Experience</h2>
          <p>Professional journey and achievements</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ x: 8 }}
            >
              <div className="timeline-marker"></div>
              <motion.div
                className="timeline-content"
                whileHover={{
                  background:
                    'linear-gradient(135deg, rgba(47, 167, 199, 0.12), rgba(22, 104, 132, 0.08))',
                  borderColor: 'var(--accent)'
                }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <p className="timeline-date">{exp.date}</p>
                <ul className="timeline-responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="timeline-projects">{exp.projects}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
