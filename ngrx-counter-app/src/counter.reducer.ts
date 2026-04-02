import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementBy } from './counter.actions';

export const initialState = {value:0};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state,value:state.value+1}) ),
  // on(incrementBy, (state, { amount }) => ({...state,value:state.value+amount}) ),
  on(incrementBy, (state,{amount}) => ({...state,value:state.value+amount}) ),
  // on(increment, (state) => {return {...state,value:state.value+1}} ),
  on(decrement, (state) => ({...state,value:state.value-1})),
  on(reset, () => initialState)
);
