import $ from 'jquery';
import hover from '../hover/hover';
import cardFront from '../card-front/cardFront';
import cardInfo from '../cardInfo/cardInfo';

const clickInfo = () => {
  $('.col-3').on('click', (e) => {
    const onePlanet = e.target.id;
    console.log(onePlanet);
    $('.searchPlanets').hide();
    $('#card-front').html('');
    cardInfo.printCard(onePlanet);
  });
};

const closeCard = () => {
  $('body').on('click', '.close', () => {
    $('#info-card').html('');
    $('.searchPlanets').show();
    cardFront.cardPrinter();
    hover.hoverImage();
    clickInfo();
  });
};

export default { clickInfo, closeCard };
