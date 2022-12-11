import {getRandomPoint} from '../mock/mocks';
import {POINT_COUNT} from '../const';

export default class PointModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoint() {
    return this.points;
  }

  removePoint() {
    this.points = null;
  }
}
