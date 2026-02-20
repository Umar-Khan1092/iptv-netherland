import React from 'react';
import { Tv, Activity, Headphones, MonitorPlay } from 'lucide-react';

const benefits = [
    {
        icon: <MonitorPlay size={32} color="var(--accent)" />,
        title: "Betaalbare Streaming Abonnementen & Geld-Terug Garantie",
        description: "Kies uit flexibele en voordelige streaming abonnementen voor hoogwaardige entertainment. Geniet van premium zenders en uitgebreide on-demand content tegen scherpe tarieven. Probeer de service zonder risico met een 3- tot 7-dagen geld-terug garantie en ervaar premium streaming voordat je een langere keuze maakt."
    },
    {
        icon: <Tv size={32} color="var(--green)" />,
        title: "Wereldwijde Live TV & Video on Demand (VOD)",
        description: "Krijg toegang tot duizenden live tv-kanalen en een uitgebreide bibliotheek met films, series, sport en internationale content. Stream wereldwijd met een stabiele internetverbinding (50 Mbps aanbevolen) en geniet altijd en overal van entertainment in HD en 4K kwaliteit."
    },
    {
        icon: <Activity size={32} color="var(--highlight)" />,
        title: "Stabiele Streaming & Compatibel met Alle Apparaten",
        description: "Onze geoptimaliseerde servers zorgen voor vloeiende, buffer-vrije streaming, zelfs tijdens piekmomenten. Compatibel met Smart TV’s, Android, iOS, streamingboxen en populaire media-apps. Betrouwbare prestaties op al je apparaten."
    },
    {
        icon: <Headphones size={32} color="var(--secondary)" />,
        title: "24/7 Klantenservice & Snelle Activatie",
        description: "Ons toegewijde supportteam staat dag en nacht klaar om je te assisteren via WhatsApp en E-mail. Ontvang directe hulp bij installatie en geniet binnen enkele minuten van je abonnement. Profiteer van snelle activatie en 24/7-ondersteuning via chat, e-mail of berichtenplatforms. Testmogelijkheden zijn beschikbaar op aanvraag. Ons supportteam helpt je snel en efficiënt op weg."
    }
];

const Benefits = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="section-title">
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Waarom Steeds Meer Mensen Overstappen naar Onze Streaming Service</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Klanten waarderen onze stabiele servers, gebruiksvriendelijke installatie en 24/7 klantenservice. Met een breed aanbod aan sport, films en series bieden wij entertainment voor het hele gezin.</p>
                </div>

                <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-card"
                            style={{
                                background: 'var(--gradient-vibrant)',
                                padding: '3rem 2rem',
                                borderRadius: '24px',
                                textAlign: 'left',
                                boxShadow: '0 20px 40px rgba(173, 20, 87, 0.15)',
                                color: 'var(--text-on-gradient)',
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div style={{
                                marginBottom: '2rem',
                                color: 'var(--text-on-gradient)',
                                display: 'inline-flex',
                                padding: '12px',
                                background: 'rgba(243, 244, 246, 0.2)',
                                borderRadius: '16px'
                            }}>
                                {React.cloneElement(benefit.icon, { color: 'var(--text-on-gradient)', size: 36 })}
                            </div>
                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.4rem',
                                fontWeight: '800',
                                color: 'var(--text-on-gradient)'
                            }}>{benefit.title}</h3>
                            <p style={{
                                color: 'var(--text-on-gradient)',
                                fontSize: '1rem',
                                lineHeight: '1.6',
                                fontWeight: '500',
                                opacity: 0.95
                            }}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
