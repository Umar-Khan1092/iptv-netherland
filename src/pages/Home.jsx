import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import ChannelPreview from '../components/ChannelPreview';

import Pricing from '../components/Pricing';
import Devices from '../components/Devices';
import Testimonials from '../components/Testimonials';
import FeatureShowcase from '../components/FeatureShowcase';
import FAQ from '../components/FAQ';
import MovieSlider from '../components/MovieSlider';
import ChannelSlider from '../components/ChannelSlider';

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Trust Bar */}
            <div style={{ background: 'var(--primary)', padding: '2rem 0', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>25k+</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>Tevreden Klanten</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>30k+</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>Live Kanalen</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>99.9%</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>Server Uptime</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>24/7</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '600' }}>Klantenservice</div>
                    </div>
                </div>
            </div>

            <Pricing />
            <MovieSlider />
            <ChannelSlider />
            <Benefits />

            <Devices />
            <Testimonials />
            <FeatureShowcase />
            <FAQ />
        </main>
    );
};

export default Home;
