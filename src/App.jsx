import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Regular imports for critical core components
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTopButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy load non-critical pages
const InstallationGuide = React.lazy(() => import('./pages/InstallationGuide'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));

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
      <ScrollToTop />
      <Header />
      <React.Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-trial" element={<div style={{ paddingTop: '120px', textAlign: 'center' }} className="container"><h2>Gratis Proefperiode</h2><p>Vraag vandaag nog uw 24-uurs gratis test aan.</p></div>} />

          {/* Legal Routes - Lazy Loaded */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </React.Suspense>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
