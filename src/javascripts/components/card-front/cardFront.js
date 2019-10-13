// import $ from 'jquery';
import './cardFront.scss';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';

const cardPrinter = () => {
  const planet = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += `
    <div class="col-3">
      <div id="front" class="card individual-card">
        <img src="${planet[i].imageUrl}" class="card-img-top image" alt="...">
        <div class="card-body">
          <h2 class="card-title title">${planet[i].Name}</h2>
          <p class="card-text d-none">Planet Description: ${planet[i].Description}</p>
          <p class="card-text d-none">Is a Gas Planet: ${planet[i].isGasPlanet}</p>
          <p class="card-text d-none">Number of Moons: ${planet[i].numberOfMoons}</p>
          <p class="card-text d-none">Largest Moon: ${planet[i].nameOfLargestMoon}</p>
        </div>
      </div>
    </div>
    `;
  }
  utilities.printToDom('card-front', domString);
};

export default { cardPrinter };
