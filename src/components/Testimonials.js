import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Talha is a fast learner who quickly understands new concepts and adapts to challenges. He works exceptionally well within a team, communicates effectively, and consistently contributes to achieving project goals. His positive attitude and willingness to learn make him a valuable asset to any development team.',
      author: 'Abrar Amin',
      title: 'CEO, Lemon Studios',
      avatar: '👨‍💼'
    },
    {
      text: 'Working with Talha was a pleasure. His commitment to learning, ability to take ownership of tasks, and persistence in solving complex problems set him apart. He approached every challenge with professionalism and continuously exceeded expectations throughout his internship journey.',
      author: 'Danish Ghani',
      title: 'Senior Full Stack Developer, DirectFN',
      avatar: '👨‍💻'
    },
    {
      text: 'Talha consistently demonstrated strong technical skills, problem-solving abilities, and a commitment to delivering high-quality work. His contributions to client projects, proactive approach, and dedication to continuous improvement earned him a permanent position with our team.',
      author: 'Ahmad Javeed Vaseer',
      title: 'CEO & Founder, Ingenious Concepts',
      avatar: '🧑‍💼'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Client Feedback</h2>
          <p>What clients say about working together</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div>
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-title">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
