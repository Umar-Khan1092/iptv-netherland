import React from 'react';
import { Play, ShieldCheck, Zap } from 'lucide-react';
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            position: 'relative',
            padding: '140px 0 100px',
            minHeight: '65vh',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text-on-gradient)',
            overflow: 'hidden'
        }}>
            {/* Optimized LCP Image - Aspect ratio matches actual image (1536x1024 = 1.5) */}
            <img
                src="/images/hero_section.avif"
                alt="Premium IPTV Nederland - Beste IPTV Service"
                width="1536"
                height="1024"
                decoding="async"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
                fetchpriority="high"
            />

            {/* Darker Overlay for better text clarity */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(26, 18, 16, 0.8) 0%, rgba(26, 18, 16, 0.4) 100%)',
                zIndex: 1
            }} />



            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} className="hero-grid">
                    <div className="hero-animate">
                        <div className="hero-badge" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'var(--gradient-vibrant)',
                            color: 'var(--text-on-gradient)',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            marginBottom: '2rem',
                            boxShadow: '0 10px 20px rgba(236, 72, 153, 0.3)'
                        }}>
                            <Zap size={14} fill="currentColor" />
                            <span>#1 IPTV AANBIEDER IN NEDERLAND</span>
                        </div>

                        {/* Live Server Status */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '1.5rem',
                            color: 'white',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#25D366',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px #25D366',
                                animation: 'pulse-green 2s infinite'
                            }}></div>
                            <span style={{ opacity: 0.9 }}>Server Status: <span style={{ color: '#25D366', fontWeight: '800' }}>LIVE</span></span>
                        </div>

                        <h1 className="hero-title" style={{ fontSize: '4.8rem', lineHeight: '1', marginBottom: '2rem', letterSpacing: '-3px', fontWeight: '900' }}>
                            IPTV Kopen in <span style={{ background: 'var(--gradient-vibrant)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nederland – 4K Abonnement </span> met 30.000+ Zenders in Nederland
                        </h1>

                        <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: 'rgba(243, 244, 246, 0.9)', marginBottom: '3rem', fontWeight: '500', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: '1.5' }}>
                            Geniet van premium IPTV Nederland met directe activatie, duizenden live zenders en films in HD/4K. Snel, stabiel en compatibel met alle apparaten – inclusief 24/7-ondersteuning.
                        </p>

                        <div className="hero-cta-wrap" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <CTAButton variant="primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Bekijk Pakketten
                            </CTAButton>
                            <CTAButton variant="outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Start Gratis Proefperiode
                            </CTAButton>
                        </div>

                        <div className="hero-trust" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ShieldCheck color="var(--accent)" size={20} />
                                <span style={{ fontSize: '1rem' }}>Veilig Betalen</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Play color="var(--accent)" size={20} />
                                <span style={{ fontSize: '1rem' }}>Directe Activatie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .hero-title { font-size: 3rem !important; letter-spacing: -1px !important; }
          .hero-subtitle { font-size: 1.1rem !important; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 110px 0 70px !important; min-height: auto !important; }
          .hero-title { font-size: 2rem !important; letter-spacing: -0.5px !important; margin-bottom: 1.2rem !important; }
          .hero-subtitle { font-size: 1rem !important; margin-bottom: 2rem !important; }
          .hero-badge { font-size: 0.75rem !important; padding: 7px 14px !important; margin-bottom: 1.2rem !important; }
          .hero-cta-wrap { flex-direction: column !important; align-items: center !important; gap: 0.75rem !important; }
          .hero-cta-wrap a, .hero-cta-wrap button { width: 100% !important; justify-content: center !important; font-size: 1rem !important; }
          .hero-trust { flex-direction: column !important; gap: 0.75rem !important; }
        }
        
        @keyframes pulse-green {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes hero-fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
            animation: hero-fade-in 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default Hero;
