import { createStore } from 'redux';

const data = {
  num: 1,
};

const addNum = n => ({ type: 'addNum', payload: n });
const minusNum = n => ({ type: 'minusNum', payload: n });

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case 'addNum':
      return { num: state.num + action.payload };
    case 'minusNum':
      return { num: state.num - action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('store 中的資料變動了!');
});

window.store = store;
window.addNum = addNum;
window.minusNum = minusNum;
