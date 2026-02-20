import React from 'react';
import { ShieldCheck, Zap, Headphones, Sparkles } from 'lucide-react';

const TrustBar = () => {
    const items = [
        { icon: <ShieldCheck size={20} />, text: "100% Veilig & Betrouwbaar" },
        { icon: <Zap size={20} />, text: "Directe Activatie" },
        { icon: <Headphones size={20} />, text: "24/7 Klantenondersteuning" },
        { icon: <Sparkles size={20} />, text: "4K & 8K Ultra HD Kwaliteit" }
    ];

    return (
        <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem 0', borderBottom: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="trust-item"
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                color: 'var(--text-muted)', 
                                fontWeight: '600', 
                                fontSize: '0.9rem',
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
