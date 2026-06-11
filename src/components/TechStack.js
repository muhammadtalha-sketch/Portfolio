import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: 'Languages',
      items: ['Dart', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL']
    },
    {
      title: 'Mobile',
      items: ['Flutter', 'React Native', 'Firebase']
    },
    {
      title: 'Frontend',
      items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      title: 'Database',
      items: ['MySQL', 'MongoDB', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      items: ['Docker', 'Git & GitHub', 'CI/CD', 'Figma']
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="tech-stack">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Tech Stack</h2>
          <p>Tools and technologies mastered</p>
        </motion.div>

        <div className="tech-categories">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3>{category.title}</h3>
              <div className="tech-items">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="tech-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
