import React from 'react';

const SectionDecorations = ({ type = 'hero' }) => {
    if (type === 'hero') {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
                <div className="glass-shape animate-float" style={{ width: '400px', height: '400px', top: '-10%', right: '-5%', backgroundColor: 'rgba(173, 20, 87, 0.1)' }} />
                <div className="glass-shape animate-float" style={{ width: '300px', height: '300px', top: '20%', left: '-5%', backgroundColor: 'rgba(216, 67, 21, 0.1)', animationDelay: '-3s' }} />
                <div className="glass-shape animate-float" style={{ width: '200px', height: '200px', top: '50%', right: '10%', backgroundColor: 'rgba(255, 255, 255, 0.05)', animationDelay: '-6s' }} />
            </div>
        );
    }

    if (type === 'benefits') {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
                <div className="glass-shape animate-float" style={{ width: '350px', height: '350px', bottom: '-5%', right: '0%', backgroundColor: 'rgba(173, 20, 87, 0.05)', animationDelay: '-2s' }} />
                <div className="glass-shape animate-float" style={{ width: '250px', height: '250px', top: '10%', left: '2%', backgroundColor: 'rgba(216, 67, 21, 0.05)', animationDelay: '-5s' }} />
            </div>
        );
    }

    return null;
};

export default SectionDecorations;
