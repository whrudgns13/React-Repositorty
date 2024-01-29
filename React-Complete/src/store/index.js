import {createStore} from "redux";

const initState = {counter : 0, showCounter : true};

const reducer = (state=initState, action) =>{
  if(action.type==="increment"){
    return {
      ...state,
      counter : state.counter+1
    }
  }

  if(action.type==="increase"){
    return {
      ...state,
      counter : state.counter+action.amount
    }
  }

  if(action.type==="decrement"){
    return {
      ...state,
      counter : state.counter-1
    }
  }

  if(action.type==="shown"){
    return {
      ...state,
      showCounter : !state.showCounter
    }
  }

  return {...state};
}

const store = createStore(reducer);

export default store;
// store.dispatch({type:"decrement"});