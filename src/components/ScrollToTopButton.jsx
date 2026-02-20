import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll naar boven"
            className="scroll-to-top"
            style={{
                position: 'fixed',
                bottom: '110px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--gradient-dark)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 999,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;
