import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteBodyElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: siteBodyElement});

render(new FilterView(), siteFilterElement);
render(new SortView(), siteBodyElement);

boardPresenter.init();
