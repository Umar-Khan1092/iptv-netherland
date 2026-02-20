import React, { Suspense, useEffect, useRef, useState } from 'react';
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

// Intersection Observer hook for viewport-based loading
const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: '50px', ...options });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
};

// Lazy section wrapper that only loads when in viewport
const LazySection = ({ children, minHeight = '200px' }) => {
    const [ref, isInView] = useInView();

    return (
        <div ref={ref} style={{ minHeight }}>
            {isInView ? (
                <Suspense fallback={<SectionFallback />}>
                    {children}
                </Suspense>
            ) : null}
        </div>
    );
};

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

            <LazySection minHeight="600px">
                <Pricing />
            </LazySection>
            <LazySection minHeight="500px">
                <MovieSlider />
            </LazySection>
            <LazySection minHeight="400px">
                <ChannelSlider />
            </LazySection>
            <LazySection minHeight="500px">
                <Benefits />
            </LazySection>
            <LazySection minHeight="400px">
                <Devices />
            </LazySection>
            <LazySection minHeight="500px">
                <Testimonials />
            </LazySection>
            <LazySection minHeight="500px">
                <FeatureShowcase />
            </LazySection>
            <LazySection minHeight="600px">
                <FAQ />
            </LazySection>
        </main>
    );
};

export default Home;
