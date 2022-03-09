# Ich bin SMAPI, das große (JavaScript) API

SMAPI JavaScript API är ett mellanlager som syftar att underlätta kommunikation 
mellan SMAPI REST API och klientapplikationer. 

## Installation 

Hela SMAPI JavaScript API representeras av en Kompilerad JavaScript-fil. 
Importera filen smapi.js och applikationen är redo att kommunicera med SMAPI 
REST API.

```html
<script type="text/javascript" src="smapi.js"></script>
```

## Användning

Innan SMAPI JavaScript API kan användas, måste ett SMAPI-objekt instansieras. 
Detta görs genom att skapa en ny instans av objektet SMAPI. I samband med att 
SMAPI-objektet instansieras, bifogas en giltig SMAPI REST API-nyckel. Vid 
avsaknad av, eller användning av ogiltig API-nyckel, resulterar samtliga 
API-anrop i felkod `100`.

```javascript
var smapi = new SMAPI('API_KEY');
```

När SMAPI-objektet finns tillgängligt, kan samtliga SMAPI REST 
API-kontrollanter anropas direkt via objektreferens. Samtliga kontrollanter, 
med underliggande metoder görs tillgängliga som egenskaper och metoder direkt 
under SMAPI-objektet. Angiven callback-funktion aktiveras då SMAPI-datan finns 
tillgänglig. Svarsdata redogörs i form av anropsargument till 
callback-funktionen.

```javascript
smapi.establishment.getAll({}, onData);

function onData(rsp) {
    if (rsp.status === 'OK') {
        console.log(rsp.payload);
    }
}
```

Vidare är det möjligt att genomföra filtrering av anropsdata genom att bifoga 
anropsparametrar som argumentobjekt.

```javascript
smapi.establishment.getAll({
    student_discount: 'Y'
}, onData);

function onData(rsp) {
    if (rsp.status === 'OK') {
        console.log(rsp.payload);
    }
}
```