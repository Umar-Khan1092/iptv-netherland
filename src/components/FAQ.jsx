import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "1. Wat is IPTV en hoe werkt IPTV precies?",
        answer: "IPTV (Internet Protocol Television) is televisie via internet in plaats van kabel of satelliet. Na aankoop van een IPTV-abonnement ontvang je inloggegevens waarmee je direct tv-zenders, films en series kunt streamen op je apparaat via een internetverbinding."
    },
    {
        question: "2. Is IPTV legaal in Nederland?",
        answer: "IPTV-technologie zelf is legaal in Nederland. De legaliteit hangt af van de bron van de content en de rechten van de aanbieder. Het is belangrijk om IPTV te gebruiken via betrouwbare providers die legale en toegestane streams aanbieden."
    },
    {
        question: "3. Op welke apparaten kan ik IPTV kijken?",
        answer: "IPTV werkt op vrijwel alle moderne apparaten, waaronder Smart TV’s, Android TV, iPhone, iPad, Android-telefoons, tablets, laptops, IPTV-boxen en streamingapparaten zoals Fire TV Stick."
    },
    {
        question: "4. Hoe snel kan ik IPTV gebruiken na aankoop?",
        answer: "Na het kopen van IPTV ontvang je meestal binnen enkele minuten je accountgegevens via e-mail of WhatsApp. Daarna kun je IPTV direct installeren en beginnen met kijken."
    },
    {
        question: "5. Hoeveel kost IPTV in Nederland?",
        answer: "De prijs van IPTV in Nederland varieert afhankelijk van het pakket en de duur van het abonnement. Gemiddeld liggen IPTV-abonnementen tussen €10 en €20 per maand, met korting bij langere looptijden."
    },
    {
        question: "6. Welke internetsnelheid heb ik nodig voor IPTV?",
        answer: "Voor stabiel IPTV kijken wordt minimaal 15 Mbps aanbevolen voor HD-kwaliteit. Voor 4K-streams is 30 Mbps of hoger ideaal. Een bekabelde (Ethernet) verbinding geeft de beste stabiliteit."
    },
    {
        question: "7. Kan ik IPTV op meerdere apparaten tegelijk gebruiken?",
        answer: "Ja, IPTV kan op meerdere apparaten worden gebruikt. Voor gelijktijdig kijken op meerdere schermen heb je een multi-screen IPTV-abonnement nodig."
    },
    {
        question: "8. Is IPTV veilig om te kopen en te gebruiken?",
        answer: "IPTV is veilig wanneer je koopt bij een betrouwbare provider met beveiligde betalingen, SSL-versleuteling en goede klantenservice. Controleer altijd beoordelingen en reputatie van de aanbieder."
    },
    {
        question: "9. Kan ik IPTV testen voordat ik een abonnement koop?",
        answer: "Veel IPTV-providers bieden een gratis proefperiode of testaccount. Hiermee kun je de kwaliteit, stabiliteit en het zenderaanbod testen voordat je een abonnement afsluit."
    },
    {
        question: "10. Welke app heb ik nodig voor IPTV?",
        answer: "Voor IPTV kijken heeft u een IPTV-speler nodig, zoals IBO Player, IPTV Smarters of TiviMate. Deze apps maken verbinding met uw IPTV-abonnement zodat u live tv, films en series kunt streamen op uw Smart TV, smartphone of IPTV-box."
    },
    {
        question: "11. Welke internetsnelheid is aanbevolen voor IPTV?",
        answer: "Voor stabiel IPTV kijken wordt minimaal 15–25 Mbps aanbevolen voor HD-kwaliteit en 40 Mbps of hoger voor 4K-streams. Een bekabelde verbinding (Ethernet) geeft de beste prestaties en voorkomt buffering."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    textAlign: 'left',
                    padding: '1rem 0',
                    cursor: 'pointer'
                }}
            >
                <span>{question}</span>
                {isOpen ? <Minus size={20} color="var(--accent)" aria-hidden="true" /> : <Plus size={20} color="var(--accent)" aria-hidden="true" />}
            </button>

            <div 
                className={`faq-answer ${isOpen ? 'open' : ''}`}
                style={{ 
                    overflow: 'hidden',
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.3s ease, opacity 0.3s ease'
                }}
            >
                <p style={{ color: 'var(--text-muted)', paddingBottom: '1rem', lineHeight: '1.8' }}>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title">
                    <h2>Veelgestelde Vragen</h2>
                    <p>Alles wat u moet weten over onze IPTV service.</p>
                </div>

                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
