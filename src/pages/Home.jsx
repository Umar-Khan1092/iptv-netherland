import React, { Suspense } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components for better performance
const Benefits = React.lazy(() => import('../components/Benefits'));
const ChannelPreview = React.lazy(() => import('../components/ChannelPreview'));
const Pricing = React.lazy(() => import('../components/Pricing'));
const Devices = React.lazy(() => import('../components/Devices'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const FeatureShowcase = React.lazy(() => import('../components/FeatureShowcase'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const MovieSlider = React.lazy(() => import('../components/MovieSlider'));
const ChannelSlider = React.lazy(() => import('../components/ChannelSlider'));

// Simple fallback for lazy loaded sections
const SectionFallback = () => <div style={{ minHeight: '200px' }} />;

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Trust Bar */}
            <div style={{ background: 'var(--primary)', padding: '2rem 0', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF6B9D' }}>25k+</div>
                        <div style={{ fontSize: '0.9rem', color: '#E5E7EB', fontWeight: '600' }}>Tevreden Klanten</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF6B9D' }}>30k+</div>
                        <div style={{ fontSize: '0.9rem', color: '#E5E7EB', fontWeight: '600' }}>Live Kanalen</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF6B9D' }}>99.9%</div>
                        <div style={{ fontSize: '0.9rem', color: '#E5E7EB', fontWeight: '600' }}>Server Uptime</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: '#FF6B9D' }}>24/7</div>
                        <div style={{ fontSize: '0.9rem', color: '#E5E7EB', fontWeight: '600' }}>Klantenservice</div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<SectionFallback />}>
                <Pricing />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <MovieSlider />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <ChannelSlider />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <Benefits />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <Devices />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <FeatureShowcase />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <FAQ />
            </Suspense>
        </main>
    );
};

export default Home;
