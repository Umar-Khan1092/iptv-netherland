import React from 'react';

const channels = [
    'NPO 1', 'NPO 2', 'NPO 3', 'RTL 4', 'RTL 5', 'RTL 7', 'SBS 6', 'Veronica',
    'ESPN 1', 'ESPN 2', 'ESPN 3', 'ESPN 4', 'Ziggo Sport', 'Ziggo Sport Select',
    'Discovery', 'National Geographic', 'Disney Channel', 'Nick Jr.', 'History', 'Crime + Investigation'
];

const ChannelPreview = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--gradient-soft)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Premium Zenderoverzicht</h2>
                    <p>Krijg toegang tot duizenden kanalen uit Nederland en de rest van de wereld.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '1rem',
                }}>
                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="channel-item"
                            style={{
                                background: 'var(--gradient-vibrant)',
                                borderRadius: '12px',
                                padding: '1.2rem 1rem',
                                textAlign: 'center',
                                fontWeight: '800',
                                color: 'var(--text-on-gradient)',
                                fontSize: '0.9rem',
                                boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
                                border: 'none'
                            }}
                        >
                            {channel}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>... en nog 15.000 andere zenders</p>
                    <a href="/channels" style={{ color: 'var(--accent)', fontWeight: '600', textDecoration: 'underline' }}>Bekijk de volledige lijst</a>
                </div>
            </div>
        </section>
    );
};

export default ChannelPreview;
