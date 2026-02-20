import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0F0920', padding: '80px 0 40px', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '4rem' }} className="footer-grid">
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-on-gradient)', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '40px', height: '40px',
                                border: '2px solid var(--accent)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                overflow: 'hidden',
                                background: 'var(--gradient-vibrant)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IPTV NL Logo">
                                    <circle cx="14" cy="14" r="12" stroke="white" strokeWidth="2" fill="none"/>
                                    <text x="14" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Inter, sans-serif">NL</text>
                                    <path d="M8 10c0-3 2.5-5 6-5s6 2 6 5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                    <circle cx="10" cy="10" r="1.5" fill="white"/>
                                    <circle cx="18" cy="10" r="1.5" fill="white"/>
                                </svg>
                            </div>
                            <span>IPTV<span style={{ color: 'var(--accent)' }}>NL</span></span>
                        </Link>
                        <p style={{ color: '#CBD5E0', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            De toonaangevende IPTV-aanbieder in Nederland. Wij bieden premium streaming-diensten met een focus op kwaliteit, stabiliteit en klanttevredenheid.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: '#E2E8F0' }} aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" style={{ color: '#E2E8F0' }} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" style={{ color: '#E2E8F0' }} aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ color: 'var(--text-on-gradient)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Snelkoppelingen</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                            <li><Link to="/" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Home</Link></li>
                            <li><Link to="/pricing" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Pakketten</Link></li>
                            <li><Link to="/channels" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Zenderlijst</Link></li>
                            <li><Link to="/devices" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Apparaten</Link></li>
                            <li><Link to="/faq" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>FAQ</Link></li>
                            <li><Link to="/contact" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ color: 'var(--text-on-gradient)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Legale Informatie</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                            <li><Link to="/privacy" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Privacybeleid</Link></li>
                            <li><Link to="/terms" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Algemene Voorwaarden</Link></li>
                            <li><Link to="/cookies" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Cookiebeleid</Link></li>
                            <li><Link to="/disclaimer" style={{ color: '#CBD5E0' }} onMouseOver={(e) => e.target.style.color = 'var(--text-on-gradient)'} onMouseOut={(e) => e.target.style.color = '#CBD5E0'}>Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ color: 'var(--text-on-gradient)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Info</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#CBD5E0' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} color="var(--accent)" />
                                <a href="mailto:support@iptvnederland.fun" style={{ color: '#E2E8F0' }}>support@iptvnederland.fun</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} color="var(--accent)" />
                                <a href="https://wa.me/447412300833" style={{ color: '#E2E8F0' }}>+44 7412 300833</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                                <MapPin size={18} color="var(--accent)" />
                                <span style={{ color: '#E2E8F0' }}>Nederland Service Center<br />24/7 Online Ondersteuning</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#94A3B8', fontSize: '0.85rem' }}>
                    <p>© {new Date().getFullYear()} IPTV NL. Alle rechten voorbehouden. Hoogwaardige IPTV-diensten voor de Nederlandse markt.</p>
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
