import {getRandomArrayElement} from '../utils.js';


const transport = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const mockDestination = [
  {
    'id': 1,
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 2,
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix2',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 3,
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix3',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 4,
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix4',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
];
export const mockOffers = [
  {
    'id': 1,
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'id': 2,
    'title': 'Upgrade to a business class2',
    'price': 120
  },
  {
    'id': 3,
    'title': 'Upgrade to a business class3',
    'price': 120
  },
  {
    'id': 4,
    'title': 'Upgrade to a business class4',
    'price': 120
  },
];
export const Point = [
  {
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': [1],
    'id': '1',
    'offers': [4,1],
    'type': getRandomArrayElement(transport),
  },
  {
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': [3],
    'id': '2',
    'offers':[4,3],
    'type': getRandomArrayElement(transport),
  },
  {
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': [2],
    'id': '3',
    'offers': [1,2],
    'type': getRandomArrayElement(transport),
  },
  {
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': [4],
    'id': '4',
    'offers': [4,3],
    'type': getRandomArrayElement(transport),
  }
];


const AuthorizationError = {
  'error': 401,
  'message': 'Header Authorization is not correct'
};
const NotFoundError = {
  'error': 404,
  'message': 'Not found'
};


function getRandomDestination() {
  return getRandomArrayElement(mockDestination);
}
function getRandomOffers() {
  return getRandomArrayElement(mockOffers);
}
function getRandomPoint() {
  return getRandomArrayElement(Point);
}
function getRandomLocalAuthorizationError() {
  return getRandomArrayElement(AuthorizationError);
}
function getRandomLocalNotFoundError() {
  return getRandomArrayElement(NotFoundError);
}


export {getRandomDestination};
export {getRandomOffers};
export {getRandomPoint};
export {getRandomLocalAuthorizationError};
export {getRandomLocalNotFoundError};
