import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, CTA_ACTIONS } from '../constants/contact';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      action: CTA_ACTIONS.openEmail
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: CONTACT_INFO.linkedin,
      action: CTA_ACTIONS.openLinkedIn
    },
    {
      icon: '📱',
      label: 'Phone',
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phoneLink}`,
      action: CTA_ACTIONS.openPhone
    },
    {
      icon: '📍',
      label: 'Location',
      value: CONTACT_INFO.location,
      link: null
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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Ready to Build Something Extraordinary?</h2>
          <p>Let's transform your vision into reality</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="contact-intro" variants={itemVariants}>
            Whether you're a startup building your MVP, an enterprise scaling your platform, or a
            team looking to extend your capabilities—I'm ready to help you deliver outstanding results.
          </motion.p>

          <motion.div className="contact-methods" variants={containerVariants}>
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link || '#'}
                onClick={method.action ? (e) => {
                  e.preventDefault();
                  method.action();
                } : undefined}
                className={`contact-method ${!method.link ? 'no-link' : ''}`}
                variants={itemVariants}
                target={method.link && method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link && method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={method.link ? { y: -4 } : undefined}
              >
                <div className="method-icon">{method.icon}</div>
                <div>
                  <div className="method-label">{method.label}</div>
                  <div className="method-value">{method.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
