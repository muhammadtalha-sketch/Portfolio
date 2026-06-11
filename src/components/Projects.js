import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: '📈',
      title: 'Stock Trading Platform',
      description: 'Real-time stock trading system with live market data, portfolio tracking, and transaction history.',
      challenge: 'Building a responsive trading dashboard with real-time data updates',
      solution: 'React frontend with WebSocket integration, Node.js backend, optimized MySQL queries',
      tech: ['React', 'Node.js', 'MySQL', 'Docker']
    },
    {
      icon: '📊',
      title: 'Accounting Management System',
      description: 'Enterprise accounting system for invoice management, expense tracking, and financial reporting.',
      challenge: 'Managing complex financial workflows and compliance requirements',
      solution: 'Full MERN stack with role-based access control and automated reporting',
      tech: ['MERN', 'Firebase', 'Node.js']
    },
    {
      icon: '📦',
      title: 'Inventory Management System',
      description: 'Smart inventory tracking with automated stock alerts, supplier management, and analytics.',
      challenge: 'Real-time inventory updates across multiple warehouses',
      solution: 'Distributed system with Firebase real-time database and Docker deployment',
      tech: ['React', 'Firebase', 'Express.js']
    },
    {
      icon: '🏥',
      title: 'Sehat Makaan',
      description: 'Healthcare management platform connecting patients with doctors and medical resources.',
      challenge: 'HIPAA-compliant architecture with real-time notifications',
      solution: 'WordPress with custom plugins, Firebase integration, and secure authentication',
      tech: ['WordPress', 'PHP', 'Firebase']
    },
    {
      icon: '🤖',
      title: 'Business Automation Solutions',
      description: 'Custom automation workflows for process optimization and operational efficiency.',
      challenge: 'Integrating multiple business systems and automating complex workflows',
      solution: 'Custom integration layer with API orchestration and intelligent scheduling',
      tech: ['Automation', 'APIs', 'Workflow']
    },
    {
      icon: '🌐',
      title: 'Enterprise WordPress Solutions',
      description: 'Custom-built WordPress websites for multiple industries with SEO optimization.',
      challenge: 'Creating unique designs while maintaining performance and SEO',
      solution: 'Custom theme development, advanced plugin architecture, and optimization',
      tech: ['WordPress', 'PHP', 'SEO']
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Featured Projects</h2>
          <p>Recent work and case studies</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} className="project-card" variants={itemVariants} whileHover={{ y: -8 }}>
              <div className="project-image">
                <div className="project-placeholder">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-challenge">
                  <strong>Challenge:</strong> {project.challenge}
                </div>
                <div className="project-solution">
                  <strong>Solution:</strong> {project.solution}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
