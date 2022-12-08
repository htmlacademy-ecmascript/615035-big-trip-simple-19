import {createElement} from '../render.js';

function createListsPointTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListsPointView {
  getTemplate() {
    return createListsPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
