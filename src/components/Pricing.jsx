import React from 'react';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "1 Maand",
        price: "10",
        features: [
            "25.000+ – 35.000+ Live TV-kanalen",
            "Tot 179.000 Films & Series (VOD)",
            "SD, HD, FHD & 4K Kwaliteit",
            "Anti-Buffer & Anti-Freeze EU Servers",
            "99,99% Stabiele Streaming",
            "EPG Gids & Replay / Catch-Up TV",
            "Compatibel met alle apparaten",
            "PPV & Premium Sportkanalen",
            "Snelle Activatie",
            "24/7 Technische Ondersteuning",
            "Test mogelijk op aanvraag",
            "7 Dagen Geld-Terug Garantie"
        ],
        popular: false
    },
    {
        name: "3 Maanden",
        price: "25",
        features: [
            "25.000+ – 35.000+ Live TV-kanalen",
            "Tot 179.000 Films & Series (VOD)",
            "SD, HD, FHD & 4K Kwaliteit",
            "Anti-Buffer & Anti-Freeze EU Servers",
            "99,99% Stabiele Streaming",
            "EPG Gids & Replay / Catch-Up TV",
            "Compatibel met alle apparaten",
            "PPV & Premium Sportkanalen",
            "Snelle Activatie",
            "24/7 Technische Ondersteuning",
            "Test mogelijk op aanvraag",
            "7 Dagen Geld-Terug Garantie"
        ],
        popular: true
    },
    {
        name: "6 Maanden",
        price: "40",
        features: [
            "25.000+ – 35.000+ Live TV-kanalen",
            "Tot 179.000 Films & Series (VOD)",
            "SD, HD, FHD & 4K Kwaliteit",
            "Anti-Buffer & Anti-Freeze EU Servers",
            "99,99% Stabiele Streaming",
            "EPG Gids & Replay / Catch-Up TV",
            "Compatibel met alle apparaten",
            "PPV & Premium Sportkanalen",
            "Snelle Activatie",
            "24/7 Technische Ondersteuning",
            "Test mogelijk op aanvraag",
            "7 Dagen Geld-Terug Garantie"
        ],
        popular: false
    },
    {
        name: "12 Maanden",
        price: "70",
        features: [
            "25.000+ – 35.000+ Live TV-kanalen",
            "Tot 179.000 Films & Series (VOD)",
            "SD, HD, FHD & 4K Kwaliteit",
            "Anti-Buffer & Anti-Freeze EU Servers",
            "99,99% Stabiele Streaming",
            "EPG Gids & Replay / Catch-Up TV",
            "Compatibel met alle apparaten",
            "PPV & Premium Sportkanalen",
            "Snelle Activatie",
            "24/7 Technische Ondersteuning",
            "Test mogelijk op aanvraag",
            "7 Dagen Geld-Terug Garantie"
        ],
        popular: false
    }
];

const Pricing = () => {
    return (
        <section className="section-padding" id="pricing" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Kies Uw Pakket</h2>
                    <p>Eenvoudige en transparante prijzen zonder verborgen kosten of contracten.</p>
                </div>

                <div className="grid grid-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`card ${plan.popular ? 'popular-card' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                backgroundColor: 'var(--bg-surface)',
                                border: plan.popular ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--highlight)',
                                    color: 'var(--text-on-gradient)',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase'
                                }}>
                                    Meest Gekozen
                                </div>
                            )}

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>€</span>
                                    <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                                </div>
                            </div>

                            <ul style={{ marginBottom: '2rem', flexGrow: 1 }}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                        <Check size={16} color="var(--accent)" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <CTAButton variant="primary" className="w-full">
                                Kies Dit Pakket
                            </CTAButton>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .popular-card {
          background: var(--bg-light) !important;
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.1) !important;
          border: 2px solid var(--accent) !important;
        }
        .w-full { width: 100%; }
      `}</style>
        </section>
    );
};

export default Pricing;
