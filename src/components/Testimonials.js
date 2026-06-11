import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Talha delivered exceptional work on our trading platform. His technical expertise combined with attention to detail made the project a huge success. Highly recommended.',
      author: 'Ahmed Khan',
      title: 'CEO, DirectFN',
      avatar: '👨‍💼'
    },
    {
      text: 'Working with Talha on the healthcare platform was seamless. He understood our requirements, delivered quality code, and provided excellent support throughout.',
      author: 'Dr. Fatima Hassan',
      title: 'Founder, Sehat Makaan',
      avatar: '👩‍⚕️'
    },
    {
      text: 'His WordPress expertise transformed our online presence. Custom features, perfect execution, and SEO optimization all delivered on time.',
      author: 'Hassan Ali',
      title: 'Director, Ingenious Concepts',
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
