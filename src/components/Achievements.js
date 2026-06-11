import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    { number: '50+', title: 'Projects Delivered', description: 'Successfully completed projects across multiple industries and platforms' },
    { number: '30+', title: 'Clients Served', description: 'Built lasting relationships with startups, SMEs, and enterprises' },
    { number: '100%', title: 'Client Satisfaction', description: 'Committed to delivering excellence and exceeding expectations' },
    { number: '5+', title: 'Years of Experience', description: 'From startup phase to mature product development' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Achievements</h2>
          <p>Milestones and accomplishments</p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="achievement-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -8 }}
            >
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-title">{achievement.title}</div>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
