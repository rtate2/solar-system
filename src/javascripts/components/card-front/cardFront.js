import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';

import './cardFront.scss';

const cardPrinter = () => {
  const planet = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += `
    <div class="col-3">
      <div id="${planet[i].Name}" class="card individual-card cardFront">
        <img src="${planet[i].imageUrl}" class="card-img-top image" alt="...">
        <div class="card-body">
          <h2 class="card-title title frontTitle">${planet[i].Name}</h2>
        </div>
      </div>
    </div>
    `;
  }
  utilities.printToDom('card-front', domString);
};

export default { cardPrinter };
