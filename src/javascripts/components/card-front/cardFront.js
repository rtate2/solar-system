import './cardFront.scss';

const cardPrinter = (planets) => {
  const domString = `
    <div class="card col-3" style="width: 18rem;" >
      <img src="${planets.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${planets.Name}</h2>
        <p class="card-text">Planet Description: ${planets.Description}</p>
        <p class="card-text">Is a Gas Planet: ${planets.isGasPlanet}</p>
        <p class="card-text">Number of Moons: ${planets.numberOfMoons}</p>
        <p class="card-text">Largest Moon: ${planets.nameOfLargestMoon}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  return domString;
};

export default { cardPrinter };
