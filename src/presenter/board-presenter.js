import AddNewPointView from '../view/add-new-point-view.js';
import EditePointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import ListsPointView from '../view/lists-view.js';
import {render} from '../render.js';


export default class BoardPresenter {

  taskListsComponent = new ListsPointView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.taskListsComponent, this.boardContainer);
    render(new AddNewPointView(), this.taskListsComponent.getElement());
    render(new EditePointView(), this.taskListsComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.taskListsComponent.getElement());
    }
  }
}
