import React from 'react';
import LegalPage from './LegalPage';
import { Cookie } from 'lucide-react';

const Cookies = () => {
    return (
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
    );
};

export default Cookies;
