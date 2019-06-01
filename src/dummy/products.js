import slod1 from './assets/slod1.jpg';
import slod2 from './assets/slod2.jpg';
import slod3 from './assets/slod3.jpg';
import wb06 from './assets/wb06.jpg';

export default [
    {
        id: '1',
        name: 'Safbrew WB-06',
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
        name: 'Barley Malt',
        brand: 'Viking Malt',
        image: slod2,
        price: {
            amount: 5,
            currency: 'PLN'
        }
    },
    {
        id: '3',
        name: 'Wheat Malt',
        brand: 'Viking Malt',
        image: slod3,
        price: {
            amount: 6,
            currency: 'PLN'
        }
    }
];