export default class hej {
    Testar(): string {
        return Testar("Hello World");
    }

    Testar(meddalande: string): string {
        return meddalande;
    }

    <div text.bind={testar.id}><div/>
    <input value.bind={testar.id}><input/>
}

Databas -> Backend -> Frontend

Databas -> Backend      -> Backend For Frontend(BFF)        -> Frontend
SQL     -> aws/python   -> webbserver på aws node/python    -> webbläsaren

Select * from Album where {query}

api.google.se/testar?query =
Testar(query): List<Album> {
    client = SQLClient;

    var albums = List<Album>();

    album = client.get(query);

    return album;
}

google.se/testar?query =
TestarBFF(query): List<AlbumDto> {
    client = HttpClient;
    return client.get(query);
}


const fetchAlbums = (query) => {
    fetch('https://google.se/testar?query', query)
        .then(response => response.json())
        .then(users => {
            // console.log(users)
            setRobots(users)
        })
}

//inStartup kolla om man kör lokalt.
// mock / moq
@override
const fetchAlbums = (query) => {
    var t = 'lokaladatafil';
    t.filter(query);
    return t;
}

Regler på alla anställningar
Boyscout rule
Lämna koden alltid lite finare än när du komm
Så var inte orolig att pilla på den, saker kan gå sönder, om den gör den så är den inte bra gjord.

Rubberduck
Ta om vad du har gjort till ankan innan du går till en kollega och förklarar.

Fail is okay to do, we all do it
Det är okej att sitta fast på en sak i en vecka ungefär, fråga bara om hjälp om du behöver det.

We run and build it together.
Vi är ett team ingen sitter ensam i båten.

Ingen är ett ess på något utan vi är det alla ihop.
Så inga ensam vargar

30% av allt teamet görs kommer att användas
Men vi lär oss tillsammans

Man får alltid en mentor eller team om man är grön/junior
ca 2 år
6 månader känner man sig ungefär dum i huvudet

Teamet planerar sin egena projekt, baserat på stake holders krav.
Vi väljer ramverk och teknik, som låter häftigt.

export class testar {
    constructor(id, namn, värde) {
        this.id = id;
        this.namn = namn;
        this.värde = värde;
    }
}