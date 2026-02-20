import React from 'react';
import LegalPage from './LegalPage';
import { AlertCircle } from 'lucide-react';

const Disclaimer = () => {
    return (
        <LegalPage
            title="Disclaimer"
            icon={AlertCircle}
            content={
                <>
                    <p>De informatie op de website van <strong>IPTVNEDERLAND.FUN</strong> is met de grootst mogelijke zorgvuldigheid samengesteld. Desondanks kunnen er geen rechten worden ontleend aan de inhoud van deze website.</p>

                    <h2>Algemeen</h2>
                    <p><strong>IPTVNEDERLAND.FUN</strong> is een serviceprovider die toegang biedt tot digitale IPTV-streamingdiensten. De inhoud op onze website is uitsluitend bedoeld voor informatieve doeleinden en om de aangeboden diensten te beschrijven.</p>

                    <h2>Aansprakelijkheid voor Informatie</h2>
                    <p>Hoewel wij streven naar nauwkeurige en actuele informatie, garandeert <strong>IPTVNEDERLAND.FUN</strong> niet dat de informatie op deze website volledig, correct of actueel is. Wij aanvaarden geen enkele aansprakelijkheid voor schade, direct of indirect, die voortvloeit uit het gebruik van of het vertrouwen op de informatie op deze website.</p>

                    <h2>Dienstverlening en Beschikbaarheid</h2>
                    <p>Wij doen ons best om onze IPTV-diensten 24/7 beschikbaar te houden. Wij kunnen echter niet garanderen dat de dienst altijd zonder onderbreking, haperingen of storingen zal werken. De kwaliteit en beschikbaarheid van de dienst zijn afhankelijk van verschillende factoren, waaronder uw internetverbinding, apparatuur en de prestaties van externe servers en providers waarover wij geen directe controle hebben.</p>

                    <h2>Inhoud van Derden</h2>
                    <p><strong>IPTVNEDERLAND.FUN</strong> heeft geen controle over de specifieke inhoud van de live-kanalen of on-demand content (VOD) die via de IPTV-servers beschikbaar wordt gesteld. De verantwoordelijkheid voor de uitgezonden inhoud ligt bij de respectievelijke zenders en producenten. Wij hosten zelf geen mediabestanden op onze eigen servers.</p>

                    <h2>Links naar Externe Websites</h2>
                    <p>Onze website kan links bevatten naar websites van derden. <strong>IPTVNEDERLAND.FUN</strong> is niet verantwoordelijk voor de inhoud, privacypraktijken of betrouwbaarheid van deze externe websites. Het gebruik van dergelijke links is volledig op eigen risico.</p>

                    <h2>Intellectueel Eigendom</h2>
                    <p>Alle handelsmerken, logo's en merknamen die op deze website worden genoemd, zijn het eigendom van hun respectievelijke eigenaren. <strong>IPTVNEDERLAND.FUN</strong> maakt gebruik van deze namen uitsluitend voor informatieve doeleinden om de compatibiliteit en beschikbaarheid van diensten aan te duiden.</p>

                    <h2>Legaliteit en Gebruik</h2>
                    <p>Het gebruik van IPTV-diensten dient te gebeuren in overeenstemming met de lokale wet- en regelgeving in uw land. <strong>IPTVNEDERLAND.FUN</strong> is niet verantwoordelijk voor de wijze waarop klanten de dienst gebruiken. Wij raden klanten aan om zich te informeren over de geldende regels omtrent streaming in hun regio.</p>

                    <h2>Wijzigingen</h2>
                    <p><strong>IPTVNEDERLAND.FUN</strong> behoudt zich het recht voor om de inhoud van de website en deze disclaimer op elk moment te wijzigen zonder voorafgaande kennisgeving.</p>

                    <h2>Contact</h2>
                    <p>Heeft u vragen over deze disclaimer? Neem dan contact met ons op via:</p>
                    <p>
                        E-mail: <a href="mailto:support@iptvnederland.fun" style={{ color: 'var(--accent)' }}>support@iptvnederland.fun</a><br />
                        Website: <a href="https://iptvnederland.fun" style={{ color: 'var(--accent)' }}>https://iptvnederland.fun</a>
                    </p>
                </>
            }
        />
    );
};

export default Disclaimer;
