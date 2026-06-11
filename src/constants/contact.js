export const CONTACT_INFO = {
  email: 'talhazahid710@gmail.com',
  phone: '+92 3164247480',
  phoneLink: '+923164247480',
  linkedin: 'https://www.linkedin.com/in/muhammad-talha-881265176/',
  location: 'Adda Plot, Lahore, Pakistan',
};

export const CTA_ACTIONS = {
  startProject: () => {
    const phoneNumber = CONTACT_INFO.phoneLink.replace('+', '');
    const message = encodeURIComponent("Hi Talha, I'm interested in discussing a new project. Please let me know your availability.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  },
  viewWork: () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  },
  letWorkTogether: () => {
    const phoneNumber = CONTACT_INFO.phoneLink.replace('+', '');
    const message = encodeURIComponent("Hi Talha, I'd love to work with you on a new opportunity.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  },
  getInTouch: () => {
    const phoneNumber = CONTACT_INFO.phoneLink.replace('+', '');
    const message = encodeURIComponent("Hi Talha, I'd like to connect and discuss potential collaboration.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
  openWhatsApp: () => {
    const phoneNumber = CONTACT_INFO.phoneLink.replace('+', '');
    const message = encodeURIComponent('Hi Talha, I would like to discuss a project with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  },
};
