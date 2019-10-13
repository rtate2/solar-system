import 'bootstrap';
import '../styles/main.scss';

import hover from './components/hover/hover';
import cardFront from './components/card-front/cardFront';

const init = () => {
  // cardFront.hide();
  cardFront.cardPrinter();
  hover.hoverImage();
};

init();
