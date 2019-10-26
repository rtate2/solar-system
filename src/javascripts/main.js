import 'bootstrap';
import '../styles/main.scss';

import hover from './components/hover/hover';
import cardFront from './components/card-front/cardFront';
import click from './components/click/click';

const init = () => {
  cardFront.cardPrinter();
  hover.hoverImage();
  click.clickInfo();
  click.closeCard();
};

init();
