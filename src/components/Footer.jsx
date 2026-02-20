import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logoImg from '../assets/images/nethreland_logo.avif';

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
                                overflow: 'hidden'
                            }}>
                                <img src={logoImg} alt="IPTV NL Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pricing">Pakketten</Link></li>
                            <li><Link to="/channels">Zenderlijst</Link></li>
                            <li><Link to="/devices">Apparaten</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ color: 'var(--text-on-gradient)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Legale Informatie</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li><Link to="/privacy">Privacybeleid</Link></li>
                            <li><Link to="/terms">Algemene Voorwaarden</Link></li>
                            <li><Link to="/cookies">Cookiebeleid</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ color: 'var(--text-on-gradient)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Info</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} color="var(--accent)" />
                                <a href="mailto:umarattique9@gmail.com">umarattique9@gmail.com</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} color="var(--accent)" />
                                <a href="https://wa.me/923277343906">+92 3277343906</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                                <MapPin size={18} color="var(--accent)" />
                                <span>Nederland Service Center<br />24/7 Online Ondersteuning</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
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
