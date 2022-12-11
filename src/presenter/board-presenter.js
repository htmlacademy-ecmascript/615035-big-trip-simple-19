import {render} from '../render.js';
import AddNewPointView from '../view/add-new-point-view.js';
import EditePointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import ListsPointView from '../view/lists-view.js';

export default class BoardPresenter {

  wrapperListsPointComponent = new ListsPointView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.wrapperListsPointComponent, this.boardContainer);
    render(new AddNewPointView(), this.wrapperListsPointComponent.getElement());
    render(new EditePointView(), this.wrapperListsPointComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.wrapperListsPointComponent.getElement());
    }
  }
}
