import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const FeatureShowcase = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--gradient-vibrant)', color: 'var(--text-on-gradient)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} className="showcase-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1', fontWeight: '900' }}>Premium TV-kanalen</h2>
                        <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 1, fontWeight: '500' }}>
                            Ontdek een uitgebreid aanbod van Nederlandse en internationale tv-zenders in één overzichtelijk streamingpakket. Van live sport en nieuws tot films en entertainment – alles direct beschikbaar in 4K.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, fontWeight: '400' }}>
                            Stream jouw favoriete programma’s waar je ook bent. Of je nu kijkt op je Smart TV thuis of via je smartphone onderweg, je geniet altijd van hoogwaardige entertainment zonder onderbrekingen.
                        </p>
                        <ul style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: '500' }}>
                                <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
                                Haarscherpe 4K Ultra HD kwaliteit
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: '500' }}>
                                <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
                                50,000+ films en series on-demand
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: '500' }}>
                                <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
                                Vloeiende streaming zonder buffering
                            </li>
                        </ul>
                        <CTAButton variant="primary" style={{ backgroundColor: 'white', color: 'var(--accent)', padding: '1rem 2rem' }}>
                            Word Nu Lid
                        </CTAButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                            border: '10px solid rgba(243, 244, 246, 0.1)'
                        }}>
                            <img src="/images/hero_section.avif" alt="Content Showcase" width="768" height="512" decoding="async" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 1024px) {
          .showcase-grid { grid-template-columns: 1fr !important; text-align: center; }
          h2 { font-size: 2.2rem !important; }
          ul { align-items: center; }
        }
      `}</style>
        </section>
    );
};

export default FeatureShowcase;
