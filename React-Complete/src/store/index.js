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

const store = configureStore({
  reducer : counterSlice.reducer
});

export const counterAction = counterSlice.actions;
export default store;