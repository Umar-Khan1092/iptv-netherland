import React from 'react';
import { ShieldCheck, Zap, Headphones, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}
                        >
                            <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
