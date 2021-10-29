## Projektuppgift

Vi ska göra en webshop men fungerande funktioner.

En applikation med en kundkorg, där man ska kunna

* Visa vilka album som finns
* Lägga till album i en kundkorg
* Ta bort album i en kundkorg
* Uppdatera antalet album i en kundkorg

Funktioner som ska finnas
När användaren ändrar antalet album så ska summan uppdateras med en gång.

* Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet album boxarna".

* Kundkorgen ska vara tillgänglig från bilden på en kundkorg samt knappen "Checkout".

* Om ordern är på mer än 259kr (eller lika med) så ska det vara fri frakt. Om summan för fri frakt inte uppnåtts så visa hur långt (skillnaden) det är kvar till fri frakt:


Kommer även försöka göra commit i GitHub för att jag ska kunna följa mitt kodande och ha som dokumentation.

Projektplaneringen kommer ske via Trello.

## Dokumentation

Jag började med att skissa på en layout på hur sidan skulle se ut. Sedan började jag arbeta i min HTML fil. Men jag valde att hålla HTML filen relativt ren från kod.

**Beskriv lite olika lösningar du gjort.**

Först la jag in alla mina album i HTML filen, för det va så jag hade lärt mig från tidigare kurs. Men efter genomgång på lektion så flyttade jag över album till en egen JavaScrip fil där la jag in alla i ett objekt. Men efter en sista ändring så valde jag att lägga in album i en class istället för att class är typade och det är inte objekt. Om jag förstått det hyfsat så är klasser fasta och programmet känner av själv vad det är för innehåll som jag skriver.

**Beskriv något som var besvärligt att få till**

Med HTML och CSS så känner jag mig relativt bekväm med det, men det är när man ska koppla på JavaScripten som jag har haft mycket problem. Jag har kunnat lägga lättare funktioner som alert på min sökruta, få mina onClick att fungera och en for of loop. Men sen när man skulle addera flera funktioner ihop så fick jag skriva ner på papper hur jag ville att funktionerna skulle fungera och försöka bryta ut dom till små funktioner istället. Jag tog till slut hjälp av min svåger som är duktig inom programmering. Jag förklarade för honom hur jag ville att mina funktioner skulle fungera och hur dom skulle skriva ut i tex varukorgen. Jag fick feedback på mina funktioner och hjälp att sätta ihop funktionerna som jag inte fick ihop. Jag hade börjat och tänkt helt rätt, men jag har fortfarande svårt att lägga ihop flera funktioner genom att ropa på dom. Jag hade kunnat göra på ett enklare sätt att lägga allt i HTML filen och koppla på funktionerna där och säkert minskat min frustration. Men jag ville samtidigt lära mig att skriva funktioner och utmana mig. Nu kan jag kolla på funktionerna och se ungefär vad dom gör men ändå inte helt förstå dom. Sen har jag fått sitta och förklara för min svåger alla funktioner bara för att han ville se att jag kan se vad funktionerna gör och försöka förstå dom. Detta har gett mig väldigt mycket att få återberätta min kod. Det har blivit lite lättare att förstå för egen del men sen förklara för någon annan gör att jag får träna på min kod och se hur det hänger ihop. Sen har jag suttit med Aram och Christoffer och när dom har kollat på min kod så har jag fått förklara igen för dom vad mina funktioner gör och hur dom skrivs ut. Det har blivit mycket repetition för mig på det sättet och det är bara bonus för min del. Förhoppningsvis har dom andra också fått ut något och mer förståelse.

**Beskriv hur du felsökt ditt program när det uppstått problem**

Jag har försökt att använda console.log för att se om det skrivs ut i consolen. Eller använt mig av tex alert på knappar när dom inte fungerat.
Har även kikat i inspektera-konsol-källor direkt i webbläsaren.

**Vad gick bra**

Layouten har gått bra, den fick jag till som jag ville. Sen är jag ändå nöjd över att jag försökte mig på funktionerna vissa fick jag till på egen hand andra har jag fått hjälp och feedback på.

**Vad gick dåligt**

Dåligt är väl fel uttryck, men svårt har det varit. Vi har fått alla bitarna till att lösa uppgiften. Men jag känner att jag saknade hur jag ska bygga ihop det till en enhet. Så jag har haft problematik med att knyta ihop säcken. Samt att funktionerna har varit svåra att helt förstå sig på och hur man får till dom.

**Vad har du lärt dig**

Jag har lärt mig att man ska bryta ner allt till små steg. I början ville jag gärna tänka stort, men insåg att det inte funkade så. Nu har jag försökt bryta ner tex mina funktioner till små, så dom gör en sak. Det är lättare för mig att läsa av vad dom gör då. Har man stora funktioner är det lätt att tappa bort sig.
Sen har jag även lärt mig att man kan inte allt på en gång. Det tar tid. Jag känner mig fortfarande osäker på JavaScript, men jag har lättare att kunna se hur det hänger ihop nu än innan och jag kan skriva lättare funktioner.

**Vilka möjligheter ser du med de kunskaper du fått under kursen.**

Det är ju ett nytt språk för mig. Men jag ser ju att man kan bygga rätt så roliga saker med JavaScript. Även om jag inte "behärskar" det än, så tror jag på sikt att man kan bygga mer levande hemsidor.

**Motivera varför du valt en specifik lösning.**

Vi gick igenom event-listener på lektionen och jag försökte få till det på mina egna knappar men utan resultat så valde jag till slut att lägga onClick på alla knappar och koppla dom till funktioner istället.

**Lämna förslag på förbättringar av din kod.**

Man kan säkert skriva funktionerna bättre och att dom blir färre men gör samma saker för att man kopplar samman dom. Minska antal rader kod. Men jag känner att jag inte är där kunskapsmässigt så jag har valt att bryta ut koderna så det blir fler små funktioner och sen anraopat dom på varandra. Annars hade jag nog aldrig löst uppgiften. Det är fortfarande svårt att förstå men jag kan hyfsat se vad varje funktion gör.

**Lämna exempel på lösningar du valde att inte implementera**
 
Jag valde att inte lägga till en "ta bort eller kryss" knapp om man vill ta bort album. Man får helt enkelt klicka på pilarna i input filen för att nollställa/ta bort album. Detta är för att jag kände att det blev för mycket och jag kände mig stressad. Nu fick vi mer tid, men jag känner mig nöjd över mitt arbete.