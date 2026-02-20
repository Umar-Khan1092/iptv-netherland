import React from 'react';
import { motion } from 'framer-motion';

const channels = [
    'NPO 1', 'NPO 2', 'NPO 3', 'RTL 4', 'RTL 5', 'RTL 7', 'SBS 6', 'Veronica',
    'ESPN 1', 'ESPN 2', 'ESPN 3', 'ESPN 4', 'Ziggo Sport', 'Ziggo Sport Select',
    'Discovery', 'National Geographic', 'Disney Channel', 'Nick Jr.', 'History', 'Crime + Investigation'
];

const ChannelSlider = () => {
    // Duplicate for infinite loop
    const duplicatedChannels = [...channels, ...channels];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', overflow: 'hidden', padding: '10px 0 60px' }}>
            <div className="container" style={{ marginBottom: '2rem' }}>
                <div className="section-title" style={{ marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900' }}>Premium Kanalen</h2>
                    <p>Bekijk de beste Nederlandse en internationale tv-zenders in één compleet streamingpakket – live sport, films, nieuws en entertainment in HD en 4K kwaliteit.</p>
                </div>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                {/* First Row - Moving Right to Left */}
                <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
                    <motion.div
                        style={{ display: 'flex', gap: '15px', width: 'max-content' }}
                        animate={{ x: [0, -1800] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                        {duplicatedChannels.map((channel, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'var(--gradient-vibrant)',
                                    borderRadius: '12px',
                                    padding: '1.2rem 2rem',
                                    textAlign: 'center',
                                    fontWeight: '900',
                                    color: 'var(--text-on-gradient)',
                                    fontSize: '1rem',
                                    boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
                                    minWidth: '180px',
                                    flexShrink: 0,
                                    textTransform: 'uppercase'
                                }}
                            >
                                {channel}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Second Row - Moving Left to Right */}
                <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
                    <motion.div
                        style={{ display: 'flex', gap: '15px', width: 'max-content' }}
                        animate={{ x: [-1800, 0] }}
                        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    >
                        {[...duplicatedChannels].reverse().map((channel, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'var(--gradient-vibrant)',
                                    borderRadius: '12px',
                                    padding: '1.2rem 2rem',
                                    textAlign: 'center',
                                    fontWeight: '900',
                                    color: 'var(--text-on-gradient)',
                                    fontSize: '1rem',
                                    boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
                                    minWidth: '180px',
                                    flexShrink: 0,
                                    textTransform: 'uppercase'
                                }}
                            >
                                {channel}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>... en nog 15.000 andere zenders</p>
                <a href="/channels" style={{ color: 'var(--accent)', fontWeight: '700', textDecoration: 'underline' }}>Bekijk de volledige lijst</a>
            </div>
        </section>
    );
};

export default ChannelSlider;
