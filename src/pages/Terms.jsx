import React from 'react';
import LegalPage from './LegalPage';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <LegalPage
            title="Algemene Voorwaarden"
            icon={FileText}
            content={
                <>
                    <p>Deze algemene voorwaarden zijn van toepassing op het gebruik van de website en diensten van <strong>IPTVNEDERLAND.FUN</strong>. Door onze website te bezoeken of een abonnement af te sluiten, gaat u akkoord met deze voorwaarden.</p>

                    <h2>1. Acceptatie van voorwaarden</h2>
                    <p>Door gebruik te maken van de diensten van <strong>IPTVNEDERLAND.FUN</strong> bevestigt u dat u deze algemene voorwaarden hebt gelezen, begrepen en geaccepteerd.</p>
                    <p>Indien u niet akkoord gaat met deze voorwaarden, dient u geen gebruik te maken van onze website of diensten. Deze voorwaarden gelden voor alle klanten in Nederland, België, Duitsland, Luxemburg en andere Europese landen waar onze diensten beschikbaar zijn.</p>

                    <h2>2. Beschrijving van de dienst</h2>
                    <p><strong>IPTVNEDERLAND.FUN</strong> biedt een digitale IPTV-streamingdienst met toegang tot online televisie- en videocontent via internetverbinding.</p>
                    <p>De dienst kan onder andere omvatten:</p>
                    <ul>
                        <li>Live tv-kanalen in HD, Full HD en 4K kwaliteit</li>
                        <li>Video-on-Demand (films en series)</li>
                        <li>Elektronische Programmagids (EPG)</li>
                        <li>Catch-up of terugkijkfunctie (indien beschikbaar)</li>
                        <li>Ondersteuning voor meerdere apparaten (Smart TV, mobiel, tablet, computer, streamingapparaten)</li>
                    </ul>
                    <p>Beschikbaarheid en inhoud kunnen variëren per regio, abonnement of technische omstandigheden.</p>

                    <h2>3. Abonnementen en betaling</h2>
                    <p>Onze IPTV-abonnementen worden aangeboden in verschillende looptijden, zoals 3, 6 of 12 maanden.</p>
                    <p>Voorwaarden:</p>
                    <ul>
                        <li>Alle prijzen worden weergegeven in euro (€)</li>
                        <li>Betaling verloopt via externe, beveiligde betaalproviders</li>
                        <li>Activatie vindt plaats na succesvolle betaling</li>
                        <li>Abonnementen zijn tijdelijk en verlopen automatisch na de gekozen periode</li>
                    </ul>

                    <h2>4. Gebruik van de dienst</h2>
                    <p>Door gebruik te maken van onze IPTV-dienst stemt u ermee in dat:</p>
                    <ul>
                        <li>De dienst uitsluitend voor persoonlijk gebruik is</li>
                        <li>Inloggegevens vertrouwelijk blijven en niet gedeeld worden</li>
                        <li>Het aantal gelijktijdige streams volgens abonnement wordt gerespecteerd</li>
                        <li>Doorverkoop, herdistributie of commerciële exploitatie verboden is</li>
                        <li>De dienst niet wordt gebruikt voor illegale activiteiten</li>
                    </ul>

                    <h2>5. Account en toegang</h2>
                    <p>U bent verantwoordelijk voor het correct bewaren van uw account- en toegangsgegevens. <strong>IPTVNEDERLAND.FUN</strong> is niet aansprakelijk voor verlies, misbruik of ongeautoriseerde toegang als gevolg van het delen van uw gegevens met derden.</p>

                    <h2>6. Beschikbaarheid en prestaties</h2>
                    <p>Wij streven naar een stabiele en hoogwaardige IPTV-ervaring. Wij garanderen echter niet dat de dienst altijd zonder onderbreking, vertraging of storingen beschikbaar is. Onderbrekingen kunnen ontstaan door onderhoud, netwerkproblemen, overmacht of externe providers.</p>

                    <h2>7. Opzegging en terugbetaling</h2>
                    <p>U kunt uw abonnement op elk moment stopzetten. Indien een terugbetalingsgarantie van toepassing is, gelden de voorwaarden zoals vermeld op de website op het moment van aankoop. Na activatie en gebruik kan een abonnement geheel of gedeeltelijk niet-restitueerbaar zijn.</p>

                    <h2>8. Intellectuele eigendom</h2>
                    <p>Alle inhoud, software, teksten, logo’s, afbeeldingen en website-materialen van <strong>IPTVNEDERLAND.FUN</strong> zijn beschermd door auteursrechten. Het is niet toegestaan om inhoud te kopiëren, te reproduceren of merk- of handelsnamen te gebruiken zonder toestemming.</p>

                    <h2>9. Links naar derden</h2>
                    <p>Onze website kan links bevatten naar externe websites of diensten van derden. <strong>IPTVNEDERLAND.FUN</strong> is niet verantwoordelijk for de inhoud of privacypraktijken van dergelijke externe sites.</p>

                    <h2>10. Aansprakelijkheidsbeperking</h2>
                    <p>Voor zover wettelijk toegestaan is <strong>IPTVNEDERLAND.FUN</strong> niet aansprakelijk voor indirecte of gevolgschade, verlies van gegevens of inkomsten, of onderbreking van de dienst. Gebruik van de dienst gebeurt op eigen risico.</p>

                    <h2>11. Misbruik en beëindiging</h2>
                    <p>Wij behouden ons het recht voor om zonder voorafgaande kennisgeving accounts te blokkeren of abonnementen te beëindigen bij schending van voorwaarden, frauduleus gebruik of illegale activiteiten.</p>

                    <h2>12. Privacy</h2>
                    <p>Gebruik van onze diensten is ook onderworpen aan ons <Link to="/privacy" style={{ color: 'var(--accent)' }}>Privacybeleid</Link>.</p>

                    <h2>13. Wijzigingen van voorwaarden</h2>
                    <p><strong>IPTVNEDERLAND.FUN</strong> kan deze algemene voorwaarden op elk moment aanpassen. De meest actuele versie is altijd beschikbaar op deze pagina.</p>

                    <h2>14. Toepasselijk recht</h2>
                    <p>Op deze algemene voorwaarden is het recht van Nederland van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</p>

                    <h2>15. Contact</h2>
                    <p>Voor vragen over deze algemene voorwaarden:</p>
                    <p>
                        E-mail: <a href="mailto:support@iptvnederland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederland.fun</a><br />
                        Website: <a href="https://iptvnederland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederland.fun</a>
                    </p>
                </>
            }
        />
    );
};

export default Terms;
