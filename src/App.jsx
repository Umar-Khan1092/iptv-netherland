import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Regular imports for critical core components
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTopButton';

// Scroll to top and SEO management on route change
const PageManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // SEO Data Map (Rank Math style)
    const seoData = {
      '/': {
        title: 'Beste IPTV Nederland – 4K Kwaliteit & Alle Zenders | IPTVNEDERLAND.FUN',
        description: 'Geniet van de beste IPTV service in Nederland. Meer dan 30.000+ zenders, 179.000 films en series in 4K. Probeer het vandaag nog!'
      },
      '/installation-guide': {
        title: 'IPTV Installatie Gids – Stap voor Stap Handleiding',
        description: 'Leer hoe u IPTV installeert op Firestick, Smart TV, Android en iOS. Onze eenvoudige gids helpt u in 5 minuten op weg.'
      },
      '/pricing': {
        title: 'IPTV Pakketten & Prijzen – Goedkoop IPTV Abonnement',
        description: 'Bekijk onze scherpe IPTV prijzen. Kies uit 1, 3, 6 of 12 maanden. Directe activatie en 24/7 support.'
      },
      '/contact': {
        title: 'Contact – Klantenservice IPTVNEDERLAND.FUN',
        description: 'Heeft u vragen of hulp nodig? Neem contact op met onze 24/7 klantenservice via WhatsApp of e-mail.'
      },
      '/faq': {
        title: 'Veelgestelde Vragen (FAQ) – Alles over IPTV',
        description: 'Vragen over installatie, zenders of betaling? Vind hier alle antwoorden op de meest gestelde vragen over onze IPTV service.'
      }
    };

    const currentSEO = seoData[pathname] || {
      title: `${pathname.split('/')[1]?.replace(/-/g, ' ').toUpperCase() || 'Page'} | IPTVNEDERLAND.FUN`,
      description: 'Premium IPTV service in Nederland met 4K kwaliteit en alle zenders.'
    };

    // Update Title
    document.title = currentSEO.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentSEO.description);

    // Update Open Graph Tags
    const updateOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOG('og:title', currentSEO.title);
    updateOG('og:description', currentSEO.description);
    updateOG('og:url', `https://iptvnederland.fun${pathname}`);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://iptvnederland.fun${pathname}`);

  }, [pathname]);

  return null;
};

// Lazy load pages
const InstallationGuide = React.lazy(() => import('./pages/InstallationGuide'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));

// Components reused as pages
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Devices = React.lazy(() => import('./components/Devices'));
const ChannelSlider = React.lazy(() => import('./components/ChannelSlider'));
const FeatureShowcase = React.lazy(() => import('./components/FeatureShowcase'));

const LoadingFallback = () => (
  <div style={{
    paddingTop: '150px',
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid var(--border-color)',
      borderTop: '4px solid var(--accent)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Laden...</p>
    <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
  </div>
);

const App = () => {
  return (
    <Router>
      <PageManager />
      <Header />
      <React.Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-trial" element={<div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }} className="container"><h2>Gratis Proefperiode</h2><p>Vraag vandaag nog uw 24-uurs gratis test aan.</p></div>} />

          {/* Additional Routes linked from Header */}
          <Route path="/pricing" element={<div style={{ paddingTop: '100px' }}><Pricing /></div>} />
          <Route path="/faq" element={<div style={{ paddingTop: '100px' }}><FAQ /></div>} />
          <Route path="/devices" element={<div style={{ paddingTop: '100px' }}><Devices /></div>} />
          <Route path="/channels" element={<div style={{ paddingTop: '100px' }}><ChannelSlider /></div>} />
          <Route path="/features" element={<div style={{ paddingTop: '100px' }}><FeatureShowcase /></div>} />

          {/* Legal Routes - Lazy Loaded */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* 404 Route */}
          <Route path="*" element={<div style={{ paddingTop: '200px', textAlign: 'center', minHeight: '60vh' }} className="container"><h2>404 - Pagina niet gevonden</h2><p>De pagina die u zoekt bestaat niet.</p><a href="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Terug naar Home</a></div>} />
        </Routes>
      </React.Suspense>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
