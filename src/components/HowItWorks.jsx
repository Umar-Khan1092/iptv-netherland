import React from 'react';
import { ShoppingCart, CreditCard, Mail, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <ShoppingCart size={24} />,
        title: "KIES UW ABONNEMENT",
        desc: "Selecteer het perfecte IPTV-pakket voor uw behoeften."
    },
    {
        icon: <CreditCard size={24} />,
        title: "VEILIGE BETALING",
        desc: "Betaal veilig via iDeal, PayPal of creditcard."
    },
    {
        icon: <Mail size={24} />,
        title: "ONTVANG UW GEGEVENS",
        desc: "Ontvang direct uw inloggegevens en installatie-instructies."
    },
    {
        icon: <Play size={24} />,
        title: "GENIET VAN TV",
        desc: "Begin direct met het kijken naar uw favoriete zenders."
    }
];

const HowItWorks = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-surface)', color: 'var(--text-main)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 style={{ fontSize: '3.2rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1', fontWeight: '900' }}>
                        Hoe werkt het beste IPTV-abonnement in Nederland?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: '500' }}>
                        In slechts 4 simpele stappen bent u klaar om te genieten van de beste IPTV-service in Nederland.
                    </p>
                </div>

                <div style={{ position: 'relative', marginTop: '4rem' }}>
                    {/* Connecting Line (Pink) */}
                    <div style={{
                        position: 'absolute',
                        top: '50px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'var(--accent)',
                        opacity: 0.1,
                        zIndex: 0
                    }} className="connecting-line" />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem',
                        position: 'relative',
                        zIndex: 1
                    }} className="steps-grid">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--gradient-vibrant)',
                                    borderRadius: '24px',
                                    padding: '3.5rem 2rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    boxShadow: '0 20px 40px rgba(173, 20, 87, 0.15)',
                                    color: 'black'
                                }}
                            >
                                <div style={{
                                    position: 'relative',
                                    width: '90px',
                                    height: '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    {/* Outer Circle (Translucent) */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        border: '2px solid rgba(243, 244, 246, 0.4)',
                                        background: 'rgba(243, 244, 246, 0.1)'
                                    }} />

                                    {/* Inner Circle (Light Gray Background) */}
                                    <div style={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '50%',
                                        backgroundColor: '#F3F4F6',
                                        color: 'var(--secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                        zIndex: 1
                                    }}>
                                        {React.cloneElement(step.icon, { size: 28, color: 'var(--secondary)' })}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'black', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{step.title}</h3>
                                <p style={{ color: 'black', fontSize: '1rem', lineHeight: '1.6', fontWeight: '600', opacity: 0.9 }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connecting-line { display: none; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
