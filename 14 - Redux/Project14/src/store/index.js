import { createStore } from 'redux'

const counterReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'increment':
          return { ...state, counter: state.counter + 1 };
    
        case 'decrement':
          return { ...state, counter: state.counter - 1 };
    
        default:
          return state;
      }
};

const store = createStore(counterReducer);

export default store;