const redux = require("redux");

const counterReducer = (state = {counter : 0}, action) => {
  
  if(action.type==="increment"){
    return {
      counter : state.counter+1
    }
  }

  if(action.type==="decrement"){
    return {
      counter : state.counter-1
    }
  }

  return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const state = store.getState();
  console.log("subscriber : ",state);
};

store.subscribe(counterSubscriber);

//dispatch 할때마다 subscribe해놓은 counterSubscriber 실행
store.dispatch({
  type : "increment"
});

store.dispatch({
  type : "decrement"
});
