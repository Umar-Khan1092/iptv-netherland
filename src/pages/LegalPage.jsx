import React from 'react';
import { ShieldCheck, FileText, Cookie, AlertCircle, Info } from 'lucide-react';

const LegalPage = ({ title, content, icon: Icon = Info }) => {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
            {/* Professional Hero Section for Legal Pages */}
            <div style={{
                background: 'var(--gradient-dark)',
                padding: '120px 0 80px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '60px'
            }}>
                {/* Background Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '400px',
                    height: '400px',
                    background: 'var(--gradient-vibrant)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: '0.15'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '-50px',
                    width: '300px',
                    height: '300px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: '0.1'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div className="legal-hero-icon" style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 2rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Icon size={40} color="var(--accent)" />
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        color: 'var(--text-on-gradient)',
                        marginBottom: '1rem',
                        fontWeight: '900',
                        letterSpacing: '-2px'
                    }}>
                        {title}
                    </h1>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'var(--gradient-vibrant)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }}></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container" style={{ paddingBottom: '100px' }}>
                <div className="legal-card" style={{
                    background: 'white',
                    borderRadius: '32px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    <div className="legal-content" style={{
                        color: 'var(--text-muted)',
                        lineHeight: '1.8',
                        fontSize: '1.1rem'
                    }}>
                        {content}
                    </div>

                    {/* Subtle Side Shape */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        right: '-20px',
                        width: '40px',
                        height: '100px',
                        background: 'var(--gradient-vibrant)',
                        opacity: '0.1',
                        borderRadius: '20px',
                        zIndex: -1
                    }}></div>
                </div>
            </div>

            <style>{`
                .legal-content h2 {
                    color: var(--primary);
                    font-size: 1.8rem;
                    margin: 2.5rem 0 1.2rem;
                    font-weight: 800;
                }
                .legal-content p {
                    margin-bottom: 1.5rem;
                }
                .legal-content ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .legal-content li {
                    list-style: disc;
                    margin-bottom: 0.5rem;
                }
                .legal-card {
                    padding: 4rem;
                }
                @media (max-width: 1024px) {
                    .legal-card {
                        padding: 2.5rem;
                    }
                    .legal-content h2 {
                        font-size: 1.5rem;
                    }
                }
                @media (max-width: 640px) {
                    .legal-card {
                        padding: 1.5rem;
                        border-radius: 16px;
                    }
                    .legal-content {
                        font-size: 0.95rem !important;
                    }
                    .legal-content h2 {
                        font-size: 1.2rem;
                        margin: 1.8rem 0 0.8rem;
                    }
                    .legal-hero {
                        padding: 100px 0 50px !important;
                    }
                    .legal-hero h1 {
                        font-size: 2.2rem !important;
                        letter-spacing: -1px !important;
                    }
                    .legal-hero-icon {
                        width: 60px !important;
                        height: 60px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default LegalPage;

