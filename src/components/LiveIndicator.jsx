import React from 'react';

const LiveIndicator = () => {
    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.2)', marginBottom: '1rem' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block' }} className="ping-animation"></span>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live Server Status: Online</span>
        </div>
    );
};

export default LiveIndicator;
