import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Bram de Vries",
        text: "Geweldige service! De kwaliteit is echt 4K en ik heb nooit last van haperingen. De zenderlijst is enorm.",
        rating: 5,
        location: "Amsterdam"
    },
    {
        name: "Sanne Bakker",
        text: "Eindelijk een IPTV aanbieder die wel doet wat ze beloven. De installatie was binnen 5 minuten geregeld via de app.",
        rating: 5,
        location: "Rotterdam"
    },
    {
        name: "Pieter van Dijk",
        text: "Beste klantenservice die ik ben tegengekomen. Ze hielpen me direct via WhatsApp toen ik een vraag had over mijn Smart TV.",
        rating: 5,
        location: "Utrecht"
    },
    {
        name: "Emma Smit",
        text: "Alle Nederlandse sportzenders werken perfect. Zeker een aanrader voor iedereen die van voetbal houdt!",
        rating: 5,
        location: "Eindhoven"
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--gradient-soft)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-main)' }}>Wat Onze Klanten Zeggen</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Duizenden tevreden gebruikers in heel Nederland en België.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-surface)',
                                padding: '2.5rem',
                                borderRadius: '24px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid var(--border-color)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />
                                ))}
                            </div>
                            <p style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                color: 'var(--text-main)',
                                marginBottom: '2rem',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    background: 'var(--gradient-vibrant)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-on-gradient)',
                                    fontWeight: '800'
                                }}>{t.name[0]}</div>
                                <div>
                                    <h3 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '700' }}>{t.name}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Geverifieerde Klant</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
