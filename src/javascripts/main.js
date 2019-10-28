import 'bootstrap';
import '../styles/main.scss';

import hover from './components/hover/hover';
import cardFront from './components/card-front/cardFront';
import click from './components/click/click';
import searchBar from './components/searchBar/searchBar';

const init = () => {
  cardFront.cardPrinter();
  hover.hoverImage();
  searchBar.searchPlanets();
  // searchBar.searchFilter();
  click.clickInfo();
  click.closeCard();
};

init();
