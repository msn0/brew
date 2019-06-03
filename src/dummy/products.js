import chmiel from './assets/chmiellub.jpg';
import slod2 from './assets/pilzviking.jpg';
import slod3 from './assets/pszeviking.jpg';
import wb06 from './assets/wb06.jpg';
import slod4 from './assets/zakwaszajacy.jpg';

export default [
    {
        id: '1',
        name: 'Drożdże suche - Safbrew WB-06',
        brand: 'Fermentis',
        image: wb06,
        description: 'Specialty yeast selected for wheat beer fermentations. ' +
            'Produces subtle estery and phenol flavor notes typical of wheat beers. ' +
            'Allows to brew beer with a high drinkability profile and presents ' +
            'a very good ability to suspend during fermentation.',
        price: {
            amount: 13.99,
            currency: 'PLN'
        }
    },
    {
        id: '2',
        name: 'Słód pilzneński',
        brand: 'Viking Malt',
        description: 'Podstawowy słód zarówno do piw górnej jak i dolnej fermentacji. ' +
            'Barwa 2-5 EBC. Może stanowić 100% zasypu podczas zacierania.',
        image: slod2,
        price: {
            amount: 3.8,
            currency: 'PLN'
        },
        quantity: 1,
        unit: 'kg'
    },
    {
        id: '3',
        name: 'Słód pszeniczny',
        brand: 'Viking Malt',
        image: slod3,
        description: 'Słód Pilzneński jest produkowany z jęczmienia browarnego jarego dwurzędowego, ' +
            'typu null-lox. Warunki zamaczania i kiełkowania tego słodu są dobrane w taki sposób, ' +
            'aby sprzyjały jak najlepszej modyfikacji produktu. Temperatura dosuszania słodu wynosi ' +
            'zwykle 80-85 °C. Ma orzechowy, lekko słodki smak, który sprawia, że może być używany ' +
            'jako słód podstawowy w bardzo wielu rodzajach piw. ',
        price: {
            amount: 4.2,
            currency: 'PLN'
        },
        quantity: 1,
        unit: 'kg'
    },
    {
        id: '4',
        name: 'Chmiel lubelski',
        brand: 'Powiśle sp.j.',
        image: chmiel,
        description: 'Chmiel Lubelski zaliczany jest do odmian super-aromatycznych: alfa-kwasy 3,0% 2018r. ' +
            'Ten niezwykle aromatyczny chmiel, wykorzystywany jest przy warzeniu piw dolnej jak i górnej ' +
            'fermentacji oraz do chmielenia warki podczas cichej fermentacji (chmielenie na zimno). ' +
            'Bardzo dobrze znany wśród belgijskich piwowarów. Powszechnie uważa się, że należy do ' +
            'rodziny Saaz (od Saaz mniej korzenny). Jest uprawiana w Polsce od 1964 roku. ',
        price: {
            amount: 4,
            currency: 'PLN'
        },
        quantity: 30,
        unit: 'g'
    },
    {
        id: '5',
        name: 'Słód zakwaszający',
        brand: 'Weyermann ®',
        image: slod4,
        description: 'Słód zakwaszajcy służy do obniżenia pH zacieru, co ma na celu efektywniejsze ' +
            'zacieranie (pH optymalne dla działania amylaz), bardziej intensywną fermentację i daje ' +
            'jaśniejszy kolor gotowego piwa. Zaokrągla i zwiększa pełnię smakową piw lekkich. pH 3,4-3,6. ' +
            'Może stanowić od 0,5 do 10% zasypu podczas zacierania. Stosuje się go do piw w stylu pilsner, ' +
            'weizen, light beer.',
        price: {
            amount: 12.90,
            currency: 'PLN'
        },
        quantity: 1,
        unit: 'kg'
    }
];