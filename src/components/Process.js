import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    { number: '01', title: 'Discovery', description: 'Understanding your business goals, target audience, and technical requirements' },
    { number: '02', title: 'Research', description: 'Competitive analysis, market research, and technical feasibility assessment' },
    { number: '03', title: 'Planning', description: 'Architecture design, technology selection, and project timeline' },
    { number: '04', title: 'Design', description: 'UI/UX design, prototyping, and design system creation' },
    { number: '05', title: 'Development', description: 'Clean, scalable code with performance optimization and best practices' },
    { number: '06', title: 'Testing', description: 'Comprehensive testing, QA, and optimization across all platforms' },
    { number: '07', title: 'Deployment & Support', description: 'Production deployment, monitoring, and ongoing maintenance' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Development Process</h2>
          <p>How I approach every project</p>
        </motion.div>

        <div className="process-flow-container">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
