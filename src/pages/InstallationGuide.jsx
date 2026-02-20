import React from 'react';
import { Smartphone, Tv, Monitor, Laptop, PlayCircle, Download, Settings, CheckCircle } from 'lucide-react';

const InstallationGuide = () => {
    const guides = [
        {
            id: 'firestick',
            title: '1️⃣ IPTV Installeren op Firestick & Android TV',
            icon: <Tv className="w-8 h-8" />,
            description: 'IPTV kijken via Fire TV Stick of Android TV is één van de populairste en meest stabiele manieren.',
            subDescription: 'Na installatie van een IPTV-app kunt u direct live tv en VOD streamen.',
            appsTitle: 'Compatibele IPTV apps:',
            apps: ['IPTV Smarters Pro', 'TiviMate', 'Perfect Player'],
            cta: '👉 Volg de installatiehandleiding voor Firestick en Android TV.'
        },
        {
            id: 'smartphone',
            title: '2️⃣ IPTV Installeren op Android & iOS Mobiel',
            icon: <Smartphone className="w-8 h-8" />,
            description: 'IPTV op smartphone of tablet is snel ingesteld en ideaal voor kijken onderweg.',
            subDescription: 'Download een IPTV-app, voeg uw abonnement toe en start direct met streamen.',
            appsTitle: 'Aanbevolen IPTV apps:',
            apps: ['IPTV Smarters Pro', 'TiviMate', 'GSE Smart IPTV'],
            cta: '👉 Bekijk de mobiele IPTV installatie voor Android en iPhone / iPad.'
        },
        {
            id: 'smart-tv',
            title: '3️⃣ IPTV Installeren op Samsung & LG Smart TV',
            icon: <Monitor className="w-8 h-8" />,
            description: 'Geniet van IPTV op groot scherm met hoge beeldkwaliteit.',
            subDescription: 'Onze IPTV-service werkt perfect op alle moderne Smart TV-systemen.',
            appsTitle: 'Ondersteunde Smart TV’s:',
            apps: ['Samsung Smart TV (Tizen)', 'LG Smart TV (webOS)'],
            extraAppsTitle: 'Geschikte Smart TV apps:',
            extraApps: ['IPTV Smarters Pro', 'GSE Smart IPTV', 'iPlayTV'],
            cta: '👉 Open de Smart TV installatiegids.'
        },
        {
            id: 'windows-mac',
            title: '4️⃣ IPTV Installeren op Windows & macOS',
            icon: <Laptop className="w-8 h-8" />,
            description: 'IPTV kijken op computer of laptop is flexibel en eenvoudig.',
            subDescription: 'Installeer een mediaspeler en voeg uw IPTV-gegevens toe om direct te kijken.',
            appsTitle: 'Aanbevolen software:',
            apps: ['VLC Media Player', 'IPTV Smarters Pro', 'Kodi'],
            cta: '👉 Bekijk de IPTV installatie voor Windows en Mac.'
        }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-light)' }}>
            {/* Hero Section for Installation Guide */}
            <div style={{
                background: 'var(--gradient-dark)',
                padding: '80px 0',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '60px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '400px',
                    height: '400px',
                    background: 'var(--gradient-vibrant)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: '0.2'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '-50px',
                    width: '300px',
                    height: '300px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: '0.1'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        color: 'var(--text-on-gradient)',
                        marginBottom: '1.5rem',
                        fontWeight: '900',
                        letterSpacing: '-2px'
                    }}>
                        IPTV <span style={{ color: 'var(--accent)' }}>Installatie</span> in 5 Minuten
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(249, 250, 251, 0.8)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Wilt u IPTV installeren en direct beginnen met kijken? Met onze eenvoudige stap-voor-stap installatiehandleiding stelt u IPTV binnen enkele minuten in op uw Smart TV, smartphone, tablet, computer of streamingapparaat.
                    </p>
                </div>
            </div>

            {/* Guides Grid */}
            <div className="container" style={{ paddingBottom: '100px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {guides.map((guide) => (
                        <div key={guide.id} style={{
                            background: 'white',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'var(--transition)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }} className="guide-card">
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--gradient-vibrant)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                marginBottom: '1.5rem'
                            }}>
                                {guide.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: 'var(--primary)',
                                fontWeight: '800',
                                lineHeight: '1.3'
                            }}>{guide.title}</h3>

                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    {guide.description}
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                    {guide.subDescription}
                                </p>

                                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                                    {guide.appsTitle}
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {guide.apps.map((app, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            <CheckCircle size={16} className="text-accent" style={{ color: 'var(--accent)' }} />
                                            {app}
                                        </li>
                                    ))}
                                </ul>

                                {guide.extraApps && (
                                    <>
                                        <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                                            {guide.extraAppsTitle}
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {guide.extraApps.map((app, idx) => (
                                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                                    <CheckCircle size={16} className="text-accent" style={{ color: 'var(--accent)' }} />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            <div style={{
                                marginTop: '1rem',
                                fontWeight: '700',
                                color: 'var(--accent)',
                                fontSize: '0.95rem'
                            }}>
                                {guide.cta}
                            </div>

                            {/* Decorative shape */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                background: 'var(--gradient-vibrant)',
                                opacity: '0.03',
                                borderRadius: '50%'
                            }}></div>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div style={{
                    marginTop: '80px',
                    background: 'var(--gradient-vibrant)',
                    borderRadius: '30px',
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(173, 20, 87, 0.2)'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '900' }}>Hulp Nodig Bij De Installatie?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Onze supportmedewerkers staan klaar om u te helpen bij het configureren van uw apparaat.
                        Neem direct contact op via WhatsApp.
                    </p>
                    <a href="https://wa.me/31000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'white',
                            color: 'var(--accent)',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            transition: 'var(--transition)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Start Live Chat
                    </a>
                </div>
            </div>

            <style>{`
                .guide-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
            `}</style>
        </div>
    );
};

export default InstallationGuide;

