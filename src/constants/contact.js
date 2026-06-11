export const CONTACT_INFO = {
  email: 'talhazahid710@gmail.com',
  phone: '+92 3164247480',
  phoneLink: '+923164247480',
  linkedin: 'https://www.linkedin.com/in/muhammad-talha-881265176/',
  location: 'Adda Plot, Lahore, Pakistan',
};

export const CTA_ACTIONS = {
  startProject: () => {
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Let's Start a Project&body=Hi Talha,%0A%0AI'm interested in discussing a new project. Please let me know your availability.`;
  },
  viewWork: () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  },
  letWorkTogether: () => {
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Let's Work Together&body=Hi Talha,%0A%0AI'd love to work with you on a new opportunity.`;
  },
  getInTouch: () => {
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Getting in Touch&body=Hi Talha,%0A%0AI'd like to connect and discuss potential collaboration.`;
  },
  openLinkedIn: () => {
    window.open(CONTACT_INFO.linkedin, '_blank');
  },
  openPhone: () => {
    window.location.href = `tel:${CONTACT_INFO.phoneLink}`;
  },
  openEmail: () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  },
};
