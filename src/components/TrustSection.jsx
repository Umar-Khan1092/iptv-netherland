import React from 'react';
import { Award, Users, ThumbsUp, ShieldCheck } from 'lucide-react';

const stats = [
    { icon: <Users size={32} />, value: "50k+", label: "Tevreden Klanten" },
    { icon: <Award size={32} />, value: "10+", label: "Jaren Ervaring" },
    { icon: <ThumbsUp size={32} />, value: "99%", label: "Klanttevredenheid" },
    { icon: <ShieldCheck size={32} />, value: "100%", label: "Veilig & Betrouwbaar" },
];

const TrustSection = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div className="grid grid-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card"
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                backgroundColor: 'var(--bg-light)',
                                borderRadius: '24px',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {stat.icon}
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{stat.value}</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
