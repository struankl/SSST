import { ADD_TRADE } from '../actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TRADE: {
      const newState = state.slice();
      newState.unshift(Object.assign({}, action.trade));
      return newState;
    }
    default:
      return state;
  }
}
