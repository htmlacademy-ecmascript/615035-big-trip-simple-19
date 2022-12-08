import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import AddNewPointView from './view/add-new-point-view.js';
import EditePointView from './view/edit-point-view.js';
import PointView from './view/point-view.js';
import {render} from './render.js';


const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteBodyElement = document.querySelector('.trip-events');


render(new FilterView(), siteFilterElement);
render(new SortView(), siteBodyElement);
render(new AddNewPointView(), siteBodyElement);
render(new EditePointView(), siteBodyElement);
render(new PointView(), siteBodyElement);


