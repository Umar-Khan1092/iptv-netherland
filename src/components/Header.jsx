import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import CTAButton from './CTAButton';

// ─── Language Context (exported so other components can use it if needed) ───
export const LangContext = createContext({ lang: 'NL', setLang: () => { } });

// ─── Translations for nav + CTA ───
const t = {
    NL: {
        home: 'Home',
        pricing: 'Pakketten',
        channels: 'Zenders',
        guide: 'Installatie Gids',
        devices: 'Apparaten',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Abonneren',
    },
    EN: {
        home: 'Home',
        pricing: 'Packages',
        channels: 'Channels',
        guide: 'Installation Guide',
        devices: 'Devices',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Subscribe',
    },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState('NL');
    const [langOpen, setLangOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setIsOpen(false); }, [location]);

    const T = t[lang];

    const navLinks = [
        { name: T.home, path: '/' },
        { name: T.pricing, path: '/pricing' },
        { name: T.channels, path: '/channels' },
        { name: T.guide, path: '/installation-guide' },
        { name: T.devices, path: '/devices' },
        { name: T.faq, path: '/faq' },
        { name: T.contact, path: '/contact' },
    ];

    const linkColor = scrolled ? 'var(--text-on-gradient)' : 'var(--text-main)';

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}
                style={{
                    background: scrolled ? 'var(--gradient-vibrant)' : 'rgba(243, 244, 246, 0.95)',
                    padding: scrolled ? '10px 0' : '15px 0',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <div style={{
                            width: '45px', height: '45px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden',
                            border: scrolled ? '2px solid rgba(255,255,255,0.8)' : '2px solid var(--accent)',
                            boxShadow: scrolled ? 'none' : '0 4px 12px rgba(173, 20, 87, 0.2)'
                        }}>
                            <img src="/images/nethreland_logo.avif" alt="IPTV NL Logo" width="45" height="45" decoding="async" loading="lazy" fetchpriority="low" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{
                            fontSize: '1.4rem', fontWeight: '900',
                            color: scrolled ? 'var(--text-on-gradient)' : 'var(--text-main)',
                            letterSpacing: '-1px'
                        }}>IPTV<span style={{ color: scrolled ? 'rgba(243, 244, 246, 0.85)' : 'var(--accent)' }}>NL</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: linkColor,
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    transition: 'var(--transition)',
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                                onMouseOut={(e) => e.target.style.color = linkColor}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* ── Language Switcher ── */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                aria-label="Taal / Language"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    background: scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
                                    border: scrolled ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.12)',
                                    borderRadius: '50px',
                                    padding: '6px 12px',
                                    cursor: 'pointer',
                                    color: linkColor,
                                    fontWeight: '700',
                                    fontSize: '0.85rem',
                                    transition: 'var(--transition)',
                                }}
                            >
                                <Globe size={14} />
                                {lang}
                                <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>▾</span>
                            </button>

                            {langOpen && (
                                <div
                                    style={{
                                        position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                                        background: '#fff',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        overflow: 'hidden',
                                        minWidth: '110px',
                                        zIndex: 100,
                                    }}
                                    onMouseLeave={() => setLangOpen(false)}
                                >
                                    {['NL', 'EN'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => { setLang(l); setLangOpen(false); }}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                width: '100%', padding: '10px 14px',
                                                background: lang === l ? 'rgba(173,20,87,0.07)' : 'transparent',
                                                border: 'none', cursor: 'pointer',
                                                fontWeight: lang === l ? '700' : '500',
                                                fontSize: '0.88rem',
                                                color: lang === l ? 'var(--accent)' : 'var(--text-main)',
                                                textAlign: 'left',
                                                transition: 'background 0.15s',
                                            }}
                                            onMouseEnter={(e) => { if (lang !== l) e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
                                            onMouseLeave={(e) => { if (lang !== l) e.currentTarget.style.background = 'transparent'; }}
                                        >
                                            <span>{l === 'NL' ? '🇳🇱' : '🇬🇧'}</span>
                                            <span>{l === 'NL' ? 'Nederlands' : 'English'}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <CTAButton variant={scrolled ? 'secondary' : 'primary'} style={{
                            padding: '10px 22px', fontSize: '0.85rem',
                            fontWeight: '800', borderRadius: '50px'
                        }}>
                            {T.cta}
                        </CTAButton>
                    </nav>

                    {/* Mobile Toggle */}
                    <div style={{ display: 'none', alignItems: 'center', gap: '10px' }} className="mobile-toggle">
                        {/* Mobile lang switch */}
                        <button
                            onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '4px',
                                background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '50px', padding: '4px 10px',
                                cursor: 'pointer', color: scrolled ? '#fff' : 'var(--text-main)',
                                fontWeight: '700', fontSize: '0.75rem',
                            }}
                        >
                            <Globe size={12} />
                            {lang}
                        </button>
                        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                            {isOpen
                                ? <X color={scrolled ? '#fff' : 'var(--text-main)'} />
                                : <Menu color={scrolled ? '#fff' : 'var(--text-main)'} />
                            }
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div style={{
                        position: 'fixed', top: '70px', left: 0, right: 0,
                        backgroundColor: 'var(--primary)',
                        padding: '1.5rem 2rem',
                        display: 'flex', flexDirection: 'column', gap: '1.25rem',
                        zIndex: 49,
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{ color: 'var(--text-on-gradient)', fontSize: '1.05rem', fontWeight: '600' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <CTAButton variant="primary" style={{ marginTop: '0.5rem' }}>
                            {T.cta}
                        </CTAButton>
                    </div>
                )}

                <style>{`
          @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: flex !important; cursor: pointer; }
          }
        `}</style>
            </header>
        </LangContext.Provider>
    );
};

export default Header;
