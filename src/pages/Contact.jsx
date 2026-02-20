import React, { useState } from 'react';
import { Mail, MessageSquare, User, Send, Phone, MapPin, Globe, Info } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
            {/* Hero Section */}
            <div style={{
                background: 'var(--gradient-dark)',
                padding: '120px 0 80px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '60px'
            }}>
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
                    <h1 style={{
                        fontSize: '3.5rem',
                        color: 'var(--text-on-gradient)',
                        marginBottom: '1rem',
                        fontWeight: '900',
                        letterSpacing: '-2px'
                    }}>
                        Neem <span style={{ color: 'var(--accent)' }}>Contact</span> Op
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(249, 250, 251, 0.8)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Heeft u vragen over onze pakketten of hulp nodig bij de installatie?
                        Ons team staat 24/7 voor u klaar.
                    </p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '100px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '4rem',
                    alignItems: 'start'
                }} className="contact-grid">

                    {/* Left Side: Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '2rem', fontWeight: '800' }}>Contactgegevens</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <a href="mailto:umarattique9@gmail.com" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.2rem',
                                    textDecoration: 'none',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    transition: 'var(--transition)'
                                }} className="contact-link">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(173, 20, 87, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)'
                                    }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>E-mail Ons</p>
                                        <p style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '700' }}>umarattique9@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/923277343906" target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.2rem',
                                    textDecoration: 'none',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    transition: 'var(--transition)'
                                }} className="contact-link">
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(37, 211, 102, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#25D366'
                                    }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>WhatsApp</p>
                                        <p style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '700' }}>+92 327 7343906</p>
                                    </div>
                                </a>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.2rem',
                                    padding: '1rem'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(45, 27, 77, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)'
                                    }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Locatie</p>
                                        <p style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: '700' }}>Nederland Service Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Box */}
                        <div style={{
                            background: 'var(--gradient-vibrant)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            color: 'white'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800' }}>24/7 Ondersteuning</h4>
                            <p style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6' }}>
                                Onze technische support is de klok rond beschikbaar om u te helpen met al uw streaming behoeften.
                                We streven ernaar om binnen 30 minuten te antwoorden op WhatsApp.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div style={{
                        background: 'white',
                        borderRadius: '32px',
                        padding: '3rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '2rem', fontWeight: '800' }}>Stuur een Bericht</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>Naam</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Uw volledige naam"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>E-mail</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Uw email adres"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>Onderwerp</label>
                                <div style={{ position: 'relative' }}>
                                    <Info size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Waar gaat uw vraag over?"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>Bericht</label>
                                <div style={{ position: 'relative' }}>
                                    <MessageSquare size={18} style={{ position: 'absolute', left: '15px', top: '15px', color: 'var(--text-muted)' }} />
                                    <textarea
                                        name="message"
                                        placeholder="Uw bericht..."
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ ...inputStyle, paddingLeft: '45px', paddingTop: '12px' }}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" style={{
                                background: 'var(--gradient-vibrant)',
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '16px',
                                border: 'none',
                                fontWeight: '800',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                transition: 'var(--transition)',
                                marginTop: '1rem'
                            }} className="submit-btn"
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <Send size={20} />
                                Bericht Verzenden
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-link:hover {
                    background: rgba(0,0,0,0.02);
                    transform: translateX(5px);
                }
                .contact-grid {
                    grid-template-columns: 1fr 1.5fr;
                }
                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
                }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px 12px 45px',
    borderRadius: '12px',
    border: '1px solid rgba(0,0,0,0.1)',
    background: '#F9FAFB',
    fontSize: '0.95rem',
    color: 'var(--text-main)',
    outline: 'none',
    transition: 'var(--transition)'
};

export default Contact;
