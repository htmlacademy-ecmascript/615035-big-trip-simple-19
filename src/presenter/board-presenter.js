import {render} from '../render.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditePointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import ListsPointView from '../view/lists-view.js';

export default class BoardPresenter {

  wrapperListsPointComponent = new ListsPointView();

  constructor({boardContainer, pointModel}) {
    this.boardContainer = boardContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.allPoints = [...this.pointModel.getPoint()];
    render(this.wrapperListsPointComponent, this.boardContainer);
    render(new AddNewPointView(), this.wrapperListsPointComponent.getElement());
    render(new EditePointView(), this.wrapperListsPointComponent.getElement());

    for (let i = 0; i < this.allPoints.length; i++) {
      render(new PointView({point: this.allPoints[i]}), this.wrapperListsPointComponent.getElement());
    }
  }
}
