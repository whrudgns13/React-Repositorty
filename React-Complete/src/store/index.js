import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {counter : 0, showCounter : true};

const counterSlice = createSlice({
  name : 'counter',
  initialState,
  reducers : {
    increment(state){
      state.counter++;
    },
    increase(state,action){
      state.counter = state.counter+action.payload.amount;
    },
    decrement(state){
      state.counter--;
    },
    toggle(state){
      state.showCounter = !state.showCounter;
    }
  }
});

const authSlice = createSlice({
  name : 'authentication',
  initialState : {
    isAuthentication : false
  },
  reducers : {
    login(state){
      state.isAuthentication = true;
    },
    logout(state){
      state.isAuthentication = false;
    }
  }
});

const store = configureStore({
  reducer : {
    counter : counterSlice.reducer,
    auth : authSlice.reducer
  },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;