import slod1 from './assets/slod1.jpg';
import slod2 from './assets/pilzviking.jpg';
import slod3 from './assets/pszeviking.jpg';
import wb06 from './assets/wb06.jpg';

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
        name: 'Słód Pilzneński',
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
    }
];