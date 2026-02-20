import React from 'react';
import { Monitor, Smartphone, Tablet, Cpu, Tv, Laptop } from 'lucide-react';

const devices = [
    { icon: <Tv size={40} />, name: "Smart TV", desc: "Samsung, LG, Sony" },
    { icon: <Smartphone size={40} />, name: "Android", desc: "Box, Phone, Tablet" },
    { icon: <Tablet size={40} />, name: "iOS", desc: "iPhone, iPad, Apple TV" },
    { icon: <Cpu size={40} />, name: "Firestick", desc: "Amazon Fire TV" },
    { icon: <Monitor size={40} />, name: "MAG Box", desc: "250, 254, 322, etc." },
    { icon: <Laptop size={40} />, name: "Windows", desc: "PC & Laptop" }
];

const Devices = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-main)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 style={{ color: 'var(--primary)' }}>Beschikbaar Op Al Uw Apparaten</h2>
                    <p style={{ color: '#4A5568' }}>Geniet van uw favoriete kanalen op elk apparaat, waar u ook bent.</p>
                </div>

                <div className="grid grid-3" style={{ gap: '1.5rem' }}>
                    {devices.map((device, index) => (
                        <div
                            key={index}
                            className="device-card"
                            style={{
                                backgroundColor: 'var(--bg-surface)',
                                border: '1px solid #E2E8F0',
                                borderRadius: '16px',
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ color: 'var(--accent)' }}>{device.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--primary)' }}>{device.name}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#4A5568' }}>{device.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Devices;
