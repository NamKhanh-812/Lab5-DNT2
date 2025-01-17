// reducers.js
import { SELECT_IMAGE } from './actions';

const initialState = {
  selectedImage: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload
      };
    default:
      return state;
  }
};

export default reducers;