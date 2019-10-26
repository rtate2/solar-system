import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

import './cardInfo.scss';

const printCard = (onePlanet) => {
  let infoString = '';
  const planet = planets.getPlanets();
  for (let i = 0; i < planet.length; i += 1) {
    if (onePlanet === `${planet[i].Name}`) {
      infoString += `
      <div class="card individual-cards" id="${planet[i].Name}">
        <button type="button" class="close d-flex justify-content-end" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        <img src="${planet[i].imageUrl}" class="card-img-top image" alt="${planet[i].Name} Image">
        <div class="card-body">
          <h2 class="card-title title">${planet[i].Name}</h2>
          <p class="card-text">${planet[i].Description}</p>
          <p class="card-text">Is a Gas Planet: ${planet[i].isGasPlanet}</p>
          <p class="card-text">There are ${planet[i].numberOfMoons} moons!</p>
          <p class="card-text">It's largest moon is ${planet[i].nameOfLargestMoon}</p>
        </div>
      </div>
      `;
    }
  }
  utilities.printToDom('info-card', infoString);
};

export default { printCard };
