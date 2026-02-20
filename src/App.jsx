import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './components/Pricing';
import ChannelPreview from './components/ChannelPreview';
import Devices from './components/Devices';
import FAQ from './components/FAQ';
import LegalPage from './pages/LegalPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import InstallationGuide from './pages/InstallationGuide';
import Contact from './pages/Contact';
import { ShieldCheck, FileText, Cookie, AlertCircle } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<div style={{ paddingTop: '80px' }}><Pricing /></div>} />
        <Route path="/channels" element={<div style={{ paddingTop: '80px' }}><ChannelPreview /></div>} />
        <Route path="/devices" element={<div style={{ paddingTop: '80px' }}><Devices /></div>} />
        <Route path="/faq" element={<div style={{ paddingTop: '80px' }}><FAQ /></div>} />
        <Route path="/installation-guide" element={<InstallationGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-trial" element={<div style={{ paddingTop: '120px', textAlign: 'center' }} className="container"><h2>Gratis Proefperiode</h2><p>Vraag vandaag nog uw 24-uurs gratis test aan.</p></div>} />

        {/* Legal Routes */}
        <Route path="/privacy" element={
          <LegalPage
            title="Privacybeleid"
            icon={ShieldCheck}
            content={
              <>
                <p>Bij <strong>IPTVNEDERALAND.FUN</strong> hecht veel waarde aan de bescherming van uw privacy en persoonsgegevens. In dit privacybeleid leggen wij duidelijk uit welke gegevens wij verzamelen, waarom wij deze verzamelen en hoe wij uw gegevens beveiligen en gebruiken.</p>
                <p>Door gebruik te maken van onze website en diensten gaat u akkoord met dit privacybeleid.</p>

                <h2>1. Wie zijn wij</h2>
                <p>
                  <strong>IPTVNEDERALAND.FUN</strong><br />
                  Website: <a href="https://iptvnederaland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederaland.fun</a><br />
                  E-mail: <a href="mailto:support@iptvnederaland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederaland.fun</a>
                </p>
                <p>Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit beleid.</p>

                <h2>2. Welke persoonsgegevens verzamelen wij</h2>
                <p>Wij kunnen de volgende gegevens verzamelen wanneer u onze website gebruikt of een bestelling plaatst:</p>
                <ul>
                  <li>Naam</li>
                  <li>E-mail address</li>
                  <li>Telefoonnummer (indien opgegeven)</li>
                  <li>IP-adres</li>
                  <li>Betaalgegevens (via beveiligde betaalproviders)</li>
                  <li>Apparaat- en gebruiksinformatie</li>
                  <li>Bestel- en accountgegevens</li>
                  <li>Website Gebruik en klikgedrag (via cookies)</li>
                </ul>

                <h2>3. Waarom wij uw gegevens verzamelen</h2>
                <p>Wij gebruiken persoonsgegevens uitsluitend voor legitieme doeleinden, waaronder:</p>
                <ul>
                  <li>Het verwerken van bestellingen en betalingen</li>
                  <li>Het activeren van IPTV-diensten</li>
                  <li>Klantenservice en technische ondersteuning</li>
                  <li>Communicatie over uw abonnement</li>
                  <li>Beveiliging en fraudepreventie</li>
                  <li>Verbetering van onze website en diensten</li>
                  <li>Analyse en statistieken (zoals Google Analytics)</li>
                </ul>

                <h2>4. Bewaartermijnen</h2>
                <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk:</p>
                <ul>
                  <li><strong>Bestel- en factuurgegevens:</strong> tot 7 jaar (fiscale verplichting)</li>
                  <li><strong>Klantcontactgegevens:</strong> maximaal 2 jaar na laatste contact</li>
                  <li><strong>Technische en loggegevens:</strong> maximaal 12 maanden</li>
                </ul>

                <h2>5. Delen van gegevens met derden</h2>
                <p><strong>IPTVNEDERALAND.FUN</strong> verkoopt of verhuurt nooit persoonsgegevens aan derden.</p>
                <p>Gegevens kunnen alleen worden gedeeld met:</p>
                <ul>
                  <li>Betalingsproviders (bijv. iDEAL, PayPal, Bancontact)</li>
                  <li>Hosting- en e-maildienstverleners</li>
                  <li>Analytische diensten (bijv. Google Analytics)</li>
                </ul>
                <p>Met alle verwerkers sluiten wij verwerkersovereenkomsten om uw privacy te beschermen.</p>

                <h2>6. Cookies</h2>
                <p>Onze website gebruikt cookies om functionaliteit en gebruikerservaring te verbeteren.</p>
                <p>Cookies helpen ons om:</p>
                <ul>
                  <li>Websiteverkeer te analyseren</li>
                  <li>Voorkeuren te onthouden</li>
                  <li>Website Prestaties te verbeteren</li>
                </ul>
                <p>Bij eerste bezoek kunt u cookies accepteren of weigeren via de cookiemelding. U kunt cookies ook verwijderen via uw browserinstellingen. Voor meer informatie zie ons <Link to="/cookies" style={{ color: 'var(--accent)' }}>Cookiebeleid</Link>.</p>

                <h2>7. Beveiliging van gegevens</h2>
                <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik of ongeautoriseerde toegang.</p>
                <p>Onze beveiligingsmaatregelen omvatten:</p>
                <ul>
                  <li>SSL-versleutelde verbindingen</li>
                  <li>Beveiligde servers</li>
                  <li>Beperkte toegangsrechten</li>
                  <li>Monitoring en beveiligingssoftware</li>
                </ul>

                <h2>8. Uw rechten (AVG/GDPR)</h2>
                <p>U heeft het recht om:</p>
                <ul>
                  <li>Uw persoonsgegevens in te zien</li>
                  <li>Uw gegevens te corrigeren</li>
                  <li>Uw gegevens te laten verwijderen</li>
                  <li>Uw toestemming in te trekken</li>
                  <li>Bezwaar te maken tegen verwerking</li>
                  <li>Gegevensoverdracht te verzoeken</li>
                </ul>
                <p>U kunt een verzoek indienen via: <a href="mailto:support@iptvnederaland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederaland.fun</a></p>
                <p>U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>

                <h2>9. Wettelijke verplichtingen</h2>
                <p>Wij kunnen persoonsgegevens openbaar maken indien dit wettelijk verplicht is of noodzakelijk om:</p>
                <ul>
                  <li>Te voldoen aan wet- en regelgeving</li>
                  <li>Misbruik of fraude te voorkomen</li>
                  <li>De veiligheid van gebruikers te beschermen</li>
                  <li>Onze rechten te verdedigen</li>
                </ul>

                <h2>10. Wijzigingen in dit privacybeleid</h2>
                <p><strong>IPTVNEDERALAND.FUN</strong> behoudt zich het recht voor dit privacybeleid te wijzigen. De meest actuele versie wordt altijd op deze pagina gepubliceerd. Wij raden aan deze pagina regelmatig te controleren.</p>

                <h2>11. Contact</h2>
                <p>Voor vragen over privacy of gegevensbescherming:</p>
                <p>
                  E-mail: <a href="mailto:support@iptvnederaland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederaland.fun</a><br />
                  Website: <a href="https://iptvnederaland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederaland.fun</a>
                </p>
              </>
            }
          />
        } />

        <Route path="/terms" element={
          <LegalPage
            title="Algemene Voorwaarden"
            icon={FileText}
            content={
              <>
                <p>Deze algemene voorwaarden zijn van toepassing op het gebruik van de website en diensten van <strong>IPTVNEDERALAND.FUN</strong>. Door onze website te bezoeken of een abonnement af te sluiten, gaat u akkoord met deze voorwaarden.</p>

                <h2>1. Acceptatie van voorwaarden</h2>
                <p>Door gebruik te maken van de diensten van <strong>IPTVNEDERALAND.FUN</strong> bevestigt u dat u deze algemene voorwaarden hebt gelezen, begrepen en geaccepteerd.</p>
                <p>Indien u niet akkoord gaat met deze voorwaarden, dient u geen gebruik te maken van onze website of diensten. Deze voorwaarden gelden voor alle klanten in Nederland, België, Duitsland, Luxemburg en andere Europese landen waar onze diensten beschikbaar zijn.</p>

                <h2>2. Beschrijving van de dienst</h2>
                <p><strong>IPTVNEDERALAND.FUN</strong> biedt een digitale IPTV-streamingdienst met toegang tot online televisie- en videocontent via internetverbinding.</p>
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
                <p>U bent verantwoordelijk voor het correct bewaren van uw account- en toegangsgegevens. <strong>IPTVNEDERALAND.FUN</strong> is niet aansprakelijk voor verlies, misbruik of ongeautoriseerde toegang als gevolg van het delen van uw gegevens met derden.</p>

                <h2>6. Beschikbaarheid en prestaties</h2>
                <p>Wij streven naar een stabiele en hoogwaardige IPTV-ervaring. Wij garanderen echter niet dat de dienst altijd zonder onderbreking, vertraging of storingen beschikbaar is. Onderbrekingen kunnen ontstaan door onderhoud, netwerkproblemen, overmacht of externe providers.</p>

                <h2>7. Opzegging en terugbetaling</h2>
                <p>U kunt uw abonnement op elk moment stopzetten. Indien een terugbetalingsgarantie van toepassing is, gelden de voorwaarden zoals vermeld op de website op het moment van aankoop. Na activatie en gebruik kan een abonnement geheel of gedeeltelijk niet-restitueerbaar zijn.</p>

                <h2>8. Intellectuele eigendom</h2>
                <p>Alle inhoud, software, teksten, logo’s, afbeeldingen en website-materialen van <strong>IPTVNEDERALAND.FUN</strong> zijn beschermd door auteursrechten. Het is niet toegestaan om inhoud te kopiëren, te reproduceren of merk- of handelsnamen te gebruiken zonder toestemming.</p>

                <h2>9. Links naar derden</h2>
                <p>Onze website kan links bevatten naar externe websites of diensten van derden. <strong>IPTVNEDERALAND.FUN</strong> is niet verantwoordelijk voor de inhoud of privacypraktijken van dergelijke externe sites.</p>

                <h2>10. Aansprakelijkheidsbeperking</h2>
                <p>Voor zover wettelijk toegestaan is <strong>IPTVNEDERALAND.FUN</strong> niet aansprakelijk voor indirecte of gevolgschade, verlies van gegevens of inkomsten, of onderbreking van de dienst. Gebruik van de dienst gebeurt op eigen risico.</p>

                <h2>11. Misbruik en beëindiging</h2>
                <p>Wij behouden ons het recht voor om zonder voorafgaande kennisgeving accounts te blokkeren of abonnementen te beëindigen bij schending van voorwaarden, frauduleus gebruik of illegale activiteiten.</p>

                <h2>12. Privacy</h2>
                <p>Gebruik van onze diensten is ook onderworpen aan ons <Link to="/privacy" style={{ color: 'var(--accent)' }}>Privacybeleid</Link>.</p>

                <h2>13. Wijzigingen van voorwaarden</h2>
                <p><strong>IPTVNEDERALAND.FUN</strong> kan deze algemene voorwaarden op elk moment aanpassen. De meest actuele versie is altijd beschikbaar op deze pagina.</p>

                <h2>14. Toepasselijk recht</h2>
                <p>Op deze algemene voorwaarden is het recht van Nederland van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</p>

                <h2>15. Contact</h2>
                <p>Voor vragen over deze algemene voorwaarden:</p>
                <p>
                  E-mail: <a href="mailto:support@iptvnederaland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederaland.fun</a><br />
                  Website: <a href="https://iptvnederaland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederaland.fun</a>
                </p>
              </>
            }
          />
        } />

        <Route path="/cookies" element={
          <LegalPage
            title="Cookiebeleid"
            icon={Cookie}
            content={
              <>
                <p>Dit cookiebeleid legt uit hoe <strong>IPTVNEDERLAND.FUN</strong> cookies en vergelijkbare technologieën gebruikt wanneer u onze website bezoekt. Door onze website te gebruiken, gaat u akkoord met het gebruik van cookies zoals beschreven in dit beleid.</p>

                <h2>Wat zijn cookies?</h2>
                <p>Cookies zijn kleine tekstbestanden die door een website op uw apparaat (computer, smartphone of tablet) worden geplaatst wanneer u de website bezoekt. Ze worden veel gebruikt om websites correct te laten functioneren, gebruikersvoorkeuren te onthouden en inzicht te krijgen in het gebruik van de website.</p>
                <p>Cookies bevatten geen direct identificeerbare persoonlijke gegevens, maar kunnen wel gekoppeld worden aan informatie die u vrijwillig verstrekt.</p>

                <h2>Welke soorten cookies gebruiken wij?</h2>
                <p>Wij gebruiken verschillende categorieën cookies om de werking en prestaties van onze website te optimaliseren.</p>

                <h2>Noodzakelijke cookies (altijd actief)</h2>
                <p>Deze cookies zijn essentieel voor de basisfunctionaliteit van de website en kunnen niet worden uitgeschakeld. Zonder deze cookies werkt de website niet correct.</p>
                <p>Voorbeelden:</p>
                <ul>
                  <li>Sessiecookies die uw sessie tijdens het browsen actief houden</li>
                  <li>Beveiligingscookies die misbruik en ongeautoriseerde toegang voorkomen</li>
                  <li>Voorkeurscookies die uw taal- of interface-instellingen onthouden</li>
                </ul>

                <h2>Analytische cookies (optioneel)</h2>
                <p>Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken. De verzamelde informatie wordt geanonimiseerd en uitsluitend gebruikt om de website te verbeteren.</p>
                <p>Voorbeelden:</p>
                <ul>
                  <li>Analyse van bezoekersaantallen en paginaweergaven</li>
                  <li>Meting van laadtijden en technische prestaties</li>
                  <li>Inzicht in populaire pagina's en navigatiepatronen</li>
                  <li>Wij gebruiken hiervoor analysetools zoals webstatistiekdiensten</li>
                </ul>

                <h2>Marketingcookies (optioneel)</h2>
                <p>Marketingcookies worden gebruikt om advertenties relevanter te maken en om marketingcampagnes te meten. Deze cookies kunnen door ons of door advertentiepartners worden geplaatst.</p>
                <p>Voorbeelden:</p>
                <ul>
                  <li>Meting van advertentieprestaties</li>
                  <li>Conversietracking</li>
                  <li>Retargeting van bezoekers op andere websites</li>
                  <li>Gepersonaliseerde advertentie-inhoud</li>
                </ul>
                <p>Deze cookies worden alleen geplaatst als u daarvoor toestemming geeft.</p>

                <h2>Cookievoorkeuren beheren</h2>
                <p>U behoudt volledige controle over het gebruik van cookies.</p>
                <p><strong>Via de cookiebanner:</strong> Bij uw eerste bezoek aan onze website verschijnt een cookiebanner. Daar kunt u:</p>
                <ul>
                  <li>Alle cookies accepteren</li>
                  <li>Alleen noodzakelijke cookies toestaan</li>
                  <li>Uw voorkeuren aanpassen</li>
                </ul>
                <p>Uw keuzes kunnen later opnieuw worden gewijzigd via de cookie-instellingen op de website.</p>

                <p><strong>Via browserinstellingen:</strong> U kunt cookies ook beheren of verwijderen via uw browserinstellingen.</p>
                <ul>
                  <li><strong>Chrome</strong> → Instellingen → Privacy en beveiliging → Cookies</li>
                  <li><strong>Firefox</strong> → Instellingen → Privacy &amp; beveiliging</li>
                  <li><strong>Safari</strong> → Voorkeuren → Privacy</li>
                  <li><strong>Edge</strong> → Instellingen → Cookies en sitemachtigingen</li>
                </ul>
                <p>Houd er rekening mee dat het uitschakelen van cookies invloed kan hebben op de werking van de website.</p>

                <h2>Cookies van derden</h2>
                <p>Sommige cookies op onze website worden geplaatst door externe dienstverleners die functionaliteiten of analyses ondersteunen. Dit kan onder andere betrekking hebben op:</p>
                <ul>
                  <li>Webanalyse-diensten</li>
                  <li>Betaalverwerking</li>
                  <li>Advertentie- en marketingtools</li>
                  <li>Videospelers of ingesloten content</li>
                </ul>
                <p>Deze derde partijen kunnen eigen privacy- en cookiebeleid hanteren waar wij geen directe controle over hebben.</p>

                <h2>Bewaartermijn van cookies</h2>
                <p>Cookies worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn geplaatst. Dit kan variëren van:</p>
                <ul>
                  <li>Sessie-cookies (verwijderd bij sluiten browser)</li>
                  <li>Tijdelijke cookies (enkele dagen of maanden)</li>
                  <li>Permanente cookies (tot maximaal enkele jaren)</li>
                </ul>

                <h2>Wijzigingen in dit cookiebeleid</h2>
                <p><strong>IPTVNEDERLAND.FUN</strong> kan dit cookiebeleid van tijd tot tijd aanpassen om wijzigingen in wetgeving, technologie of websitefunctionaliteit te weerspiegelen. De meest recente versie is altijd beschikbaar op deze pagina.</p>

                <h2>Contact</h2>
                <p>Heeft u vragen over ons cookiebeleid of het gebruik van cookies op onze website? U kunt contact met ons opnemen via:</p>
                <p>
                  Website: <a href="https://iptvnederland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederland.fun</a><br />
                  E-mail: <a href="mailto:support@iptvnederland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederland.fun</a>
                </p>
              </>
            }
          />
        } />

        <Route path="/disclaimer" element={
          <LegalPage
            title="Disclaimer"
            icon={AlertCircle}
            content={
              <>
                <p>De informatie op deze website wordt verstrekt door <strong>IPTVNEDERLAND.FUN</strong> uitsluitend voor algemene informatiedoeleinden. Of u nu een <strong>iptv abonnement</strong> heeft afgesloten of onze website enkel bezoekt voor informatie, door gebruik te maken van deze website gaat u akkoord met deze disclaimer.</p>

                <h2>Algemeen gebruik van de website</h2>
                <p>Hoewel wij ons best doen om de informatie op deze website actueel en correct te houden, kunnen wij geen garanties geven over:</p>
                <ul>
                  <li>volledigheid</li>
                  <li>nauwkeurigheid</li>
                  <li>betrouwbaarheid</li>
                  <li>beschikbaarheid</li>
                </ul>
                <p>van de aangeboden informatie, diensten of gerelateerde inhoud. Gebruik van informatie op deze website gebeurt volledig op eigen risico.</p>

                <h2>Geen aansprakelijkheid</h2>
                <p><strong>IPTVNEDERLAND.FUN</strong> is niet aansprakelijk voor:</p>
                <ul>
                  <li>directe of indirecte schade</li>
                  <li>verlies van gegevens</li>
                  <li>verlies van inkomsten</li>
                  <li>technische storingen</li>
                  <li>onderbrekingen van dienstverlening</li>
                </ul>
                <p>die voortvloeien uit het gebruik van onze website of diensten. Dit omvat ook schade veroorzaakt door:</p>
                <ul>
                  <li>tijdelijke onbeschikbaarheid</li>
                  <li>serverproblemen</li>
                  <li>netwerkstoringen</li>
                  <li>incompatibiliteit van apparaten</li>
                  <li>foutieve installatie door gebruiker</li>
                </ul>

                <h2>IPTV-dienst en Content</h2>
                <p><strong>IPTVNEDERLAND.FUN</strong> biedt toegang tot <strong>dutch iptv</strong> streamingdiensten via internetprotocoltechnologie. Wij hosten, beheren of controleren geen tv-kanalen, streams of media-inhoud die via externe bronnen beschikbaar zijn. Alle merken, zendernamen en content behoren toe aan hun respectieve eigenaars en worden uitsluitend vermeld voor identificatie- en compatibiliteitsdoeleinden.</p>
                <p>Gebruikers zijn zelf verantwoordelijk voor:</p>
                <ul>
                  <li>naleving van lokale wetgeving</li>
                  <li>gebruik van IPTV-diensten</li>
                  <li>keuze van content</li>
                  <li>gebruik van apps of apparaten</li>
                </ul>

                <h2>Externe links</h2>
                <p>Onze website kan links bevatten naar externe websites of diensten van derden. Wij hebben geen controle over de inhoud, beschikbaarheid of veiligheid van deze externe websites en aanvaarden hiervoor geen aansprakelijkheid. Het volgen van externe links gebeurt op eigen risico.</p>

                <h2>Compatibiliteit en prestaties</h2>
                <p>Wij streven naar maximale compatibiliteit met verschillende apparaten en apps, waaronder smart tv's, mobiele apparaten en het <strong>iptv kastje</strong>. Toch kunnen prestaties variëren afhankelijk van:</p>
                <ul>
                  <li>internetsnelheid</li>
                  <li>netwerkstabiliteit</li>
                  <li>apparaatcapaciteit</li>
                  <li>softwareversie</li>
                  <li>app-configuratie</li>
                </ul>
                <p>Wij kunnen geen ononderbroken of foutloze werking garanderen op alle apparaten of netwerken.</p>

                <h2>Technische ondersteuning</h2>
                <p>Eventuele installatiehandleidingen, tips of ondersteuning op deze website — inclusief voor populaire apps zoals <strong>pandora iptv</strong> — worden aangeboden als hulp. Wij zijn niet aansprakelijk voor:</p>
                <ul>
                  <li>foutieve configuratie</li>
                  <li>softwareproblemen</li>
                  <li>wijzigingen door derden</li>
                  <li>updates van apps of systemen</li>
                </ul>

                <h2>Wijzigingen</h2>
                <p><strong>IPTVNEDERLAND.FUN</strong> behoudt zich het recht voor om website-inhoud, diensten (inclusief ons <strong>iptv totaal</strong> pakketaanbod), prijzen, compatibiliteit en voorwaarden op elk moment te wijzigen zonder voorafgaande kennisgeving.</p>

                <h2>Intellectuele eigendom</h2>
                <p>Alle teksten, afbeeldingen, logo's en website-elementen op deze site zijn eigendom van <strong>IPTVNEDERLAND.FUN</strong>, tenzij anders vermeld. Zonder schriftelijke toestemming is het niet toegestaan om materiaal te:</p>
                <ul>
                  <li>kopiëren</li>
                  <li>reproduceren</li>
                  <li>verspreiden</li>
                  <li>publiceren</li>
                  <li>commercieel gebruiken</li>
                </ul>

                <h2>Toepasselijk recht</h2>
                <p>Op deze website en deze disclaimer is het recht van toepassing van het land waarin de dienstverlener is gevestigd. Eventuele geschillen vallen onder de bevoegde rechtbank van die jurisdictie.</p>

                <h2>Contact</h2>
                <p>Voor vragen over deze disclaimer kunt u contact opnemen via:</p>
                <p>
                  Website: <a href="https://iptvnederland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederland.fun</a><br />
                  E-mail: <a href="mailto:support@iptvnederland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederland.fun</a>
                </p>
              </>
            }
          />
        } />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
};

export default App;
