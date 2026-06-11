import React from 'react';
import { motion } from 'framer-motion';
import './Expertise.css';

const Expertise = () => {
  const expertise = [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Cross-platform native-level applications',
      tags: ['Flutter', 'React Native', 'Dart']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern responsive web applications',
      tags: ['MERN Stack', 'React', 'Node.js']
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      description: 'Business process and workflow automation',
      tags: ['Business Automation', 'Workflow Design', 'Integration']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Enterprise-grade interface design',
      tags: ['Figma', 'Prototyping', 'Design Systems']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Deployment, scaling, and infrastructure',
      tags: ['Docker', 'CI/CD', 'Firebase']
    },
    {
      icon: '📊',
      title: 'WordPress Solutions',
      description: 'Custom WordPress development and optimization',
      tags: ['PHP', 'Theme Dev', 'SEO']
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
    <section id="expertise" className="expertise">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Core Expertise</h2>
          <p>Services and specializations</p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="expertise-tech">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
