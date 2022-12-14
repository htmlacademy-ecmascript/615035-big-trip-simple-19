import {render} from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/points-model';
import {mockOffers, Point} from './mock/mocks';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteBodyElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
const boardPresenter = new BoardPresenter({boardContainer: siteBodyElement, pointModel});

render(new FilterView(), siteFilterElement);
render(new SortView(), siteBodyElement);

boardPresenter.init();


Point.forEach((el) => {
  el.offers.forEach((element) => {
    let pointOffer = mockOffers.find((offer) => offer.id === element);
  })
});

Point.forEach((dot) => {
  dot.offers.forEach((offer)=>{
    let c = mockOffers.filter(function (currentValue) {
      return currentValue.id === offer;
    })
  })
})

let gettingIdOffer = (arrey) => {
  let c ;
  arrey.forEach((element) => c = element.offers)
return c
}

let gettingObjectOffer = () => {

}
console.log(gettingIdOffer(Point))
