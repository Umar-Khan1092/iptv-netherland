import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, variant = 'primary', style, ...props }) => {
  const baseStyle = {
    padding: '0.8rem 2rem',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textDecoration: 'none',
    ...style
  };

  const variants = {
    primary: {
      background: 'var(--gradient-vibrant)',
      color: 'var(--text-on-gradient)',
      boxShadow: '0 10px 20px rgba(236, 72, 153, 0.2)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '2px solid var(--accent)',
      boxShadow: 'none',
    },
    secondary: {
      background: 'var(--text-on-gradient)',
      color: 'var(--accent)',
      boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
    }
  };

  const handleClick = (e) => {
    window.open('https://wa.me/923277343906?text=Hallo,%20ik%20heb%20interesse%20in%20uw%20IPTV%20service.%20Kunt%20u%20mij%20meer%20informatie%20geven?', '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(236, 72, 153, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      style={{ ...baseStyle, ...variants[variant] }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
