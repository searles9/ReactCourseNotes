import { createStore } from "redux";

const initialState =  { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1, };

    case "decrement":
      return { ...state, counter: state.counter - 1 };

    case "increase":
      return { ...state, counter: state.counter + action.amount };

    case "toggle":
      return { ...state, showCounter: !state.showCounter };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
