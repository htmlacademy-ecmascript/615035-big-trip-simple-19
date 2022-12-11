import {render} from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/points-model';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteBodyElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
const boardPresenter = new BoardPresenter({boardContainer: siteBodyElement, pointModel});

render(new FilterView(), siteFilterElement);
render(new SortView(), siteBodyElement);

boardPresenter.init();
