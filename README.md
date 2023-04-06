# Browser Technologies - De eindopdracht - Enquete over de minor Web Development

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

[enquete website](https://wongsrila.github.io/Enquete/client/)

## Inleiding

Voor de eindopdracht van Browser Technologies heb ik gekozen voor de enquete case. De gebruiker moet een enquete kunnen invullen over de minor Web Development. Er is te zien waar de gebruiker is en hoeveel vragen die nog moet antwoorden. Ook moet de gebruiker het later kunnen afmaken en dat de gegevens bewaard blijven.

![Flow Enquete](https://github.com/wongsrila/Enquete/blob/ddcb3ee21e11513a326e54d698a20b50c08fc356/client/src/images/flow_enquete.png?raw=true)

## Progressive Enhancement
Progressive enhancement is een ontwerpprincipe voor het maken van websites of applicaties waarbij de basisfunctionaliteit werkt op alle apparaten en in alle browsers, zelfs als geavanceerde functies niet worden ondersteund. Het idee is om een stevige fundering te bouwen die toegankelijk is voor iedereen en daarna geleidelijk aan meer geavanceerde functies toe te voegen voor gebruikers met modernere apparaten en browsers. Op deze manier kan iedereen de inhoud op de website bekijken en gebruiken, ongeacht hun apparaat of browser, en krijgen degenen met geavanceerdere apparaten en browsers een betere en rijkere ervaring.

## Feature Detection
Feature detection is een techniek om te controleren of een bepaalde functie of mogelijkheid beschikbaar is in de browser of het apparaat van een gebruiker voordat deze wordt gebruikt. Dit wordt meestal gebruikt om te bepalen of een website of applicatie geavanceerde functies kan aanbieden aan gebruikers met moderne browsers of apparaten, terwijl ze de basisfunctionaliteit behouden voor gebruikers met oudere of minder geavanceerde apparaten. Door te detecteren welke functies beschikbaar zijn in de browser of het apparaat van een gebruiker, kan een website of applicatie beslissen welke functies moeten worden aangeboden en welke alternatieven moeten worden gebruikt als bepaalde functies niet beschikbaar zijn.

## Features
1. Dark/Light modes
2. HTML Validatie
3. Input oplsaan in LocalStorage
4. Hash Link navigation

* Doormiddel van een `@media (prefers-color-scheme: dark)` kan ik een dark of een light modus maken en gebruiken voor de gebruiker. Dit wordt dan weer bepaald door gebruikers apparaat instellingen.
* Met de `required` optie in de html kan je een validatie zetten dat een gebruiker het moet invoeren. Op de studentennummer zit er ook een patern validatie. Dit is dat een gebruiker specifieke patroon van nummers moet invullen om het te valideren.
* Om live de inputs op te slaan heb ik `localStorage` gebruikt. Hierop heb ik wel een feature detection op gezet voor browsers die geen `localStorage` ondersteunen. Er is een event listener die kijkt naar de input van de gebruiker. Zo slaat hij elk character op in de localstorage. Hij als er voor een input al een value is, laat die dit eerst zien.
