import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import cardFront from '../card-front/cardFront';

import './planetList.scss';

const createPlanetList = () => {
  const planet = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += cardFront.cardPrinter(planet[i]);
  }
  utilities.printToDom('card-front', domString);
};

export default { createPlanetList };
