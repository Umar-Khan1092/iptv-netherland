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
