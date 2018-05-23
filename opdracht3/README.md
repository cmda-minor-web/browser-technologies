# Browser Technologies

Link voor tijdens de beoordeling: [klik dan](https://79a63b24.ngrok.io)

## Opdracht 3 - Progressive Enhanced Browser Technologies
### Tosti boodschappenlijst
Het doel van mijn web app is het samenstellen van een tosti boodschappenlijst. De data wordt gerendered op de server, en is dus beschikbaar op elke browser en op elk device. Er wordt geen gebruik gemaakt van javascript als dit niet ondersteund wordt. Wanneer de gebruiker dit niet heeft, zal er een simpele versie van de web app te zien zijn. Wanneer JS wel beschikbaar is dan krijgt de gebruiker feedback in het scherm zelf, zonder verder te klikken. Wanneer de gebruiker op een Android toestel zit, en gebruik maakt van Chrome 61 en hoger zal de gebruiker zijn persoonlijke lijst kunnen delen met de Web Share API.

## Installatie
Om de website te gebruiken heb je Node JS nodig. Als je dit niet heb, download het dan [hier](https://nodejs.org/en/)

Om de server op te starten, navigeer in de terminal naar de juiste map (opdracht 3), en voer het volgende commando uit:

``node app.js``

De server zal opstarten, en zal draaien op localhost:3000

## Probleem
Het probleem is dat de website toegankelijk moet zijn voor IEDEREEN. Dat houdt ook in:
- Mensen met een beperking (zowel visueel als fysiek)
- Mensen met een oude browser / device

### Mensen met een visuele beperking
Een visuele beperking kan zijn:
- Kleure blindheid
- Slecht zienden
- (deels) blind

Om de website voor kleurenblinden zo toegankelijk mogelijk te maken heb ik eigenlijk alleen maar gebruik gemaakt van zwart-wit. Een groter contrast is er niet, en dus zal elk mens met kleurenblindheid de website goed kunnen gebruiken.

Om de website voor slecht zienden toegankelijker te maken heb ik een redelijk grote font size gebruikt: 1.3rem (~21px), wat groter is dan de normale font size (16px).

De website is redelijk goed met een screenreader te gebruiken. De flow van de website is snel en makkelijk in gebruik.

### Mensen met een fysieke beperking
Mensen die een fysieke beperking hebben die navigeren veel met tabs door websites. Ook voor deze mensen is de website makkelijk te gebruiken. Er is makkelijk te tabben door het formulier.

### Mensen met een oude browser / device
Zoals ik al eerder aangaf is de website zonder Javascript te gebruiken. Dit zorgt ervoor dat de mensen die een hele oude browser of toestel gebruiken de website normaal kunnen gebruiken.

## Progressive Enhancement
Zoals ik eerder al heb beschreven werkt de website in elke browser op elk toestel. Wanneer Javascript beschikbaar is, dan opent er een klein deel van de website waar de gebruiker direct ziet wat hij aangevinkt heeft, en wat het totaalbedrag is van de boodschappen. Als de gebruiker van op een Android toestel zit en Chrome 61 of hoger heeft, kan hij zijn lijst delen met de Web Share API.