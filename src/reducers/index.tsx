import { EnthusiasmAction, TodoAction } from '../actions';
import {
    DECREMENT_ENTHUSIASM, DECREMENT_TODO, INCREMENT_ENTHUSIASM, INCREMENT_TODO
} from '../constants/index';

// import { initStoreState, StoreState } from '../types/index';


// 存放所有的 reducer
// 计数 render
export function count(state = 0, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
        return state + 1;
    //   return Object.assign({}, state, {count: state.count + 1});
    case DECREMENT_ENTHUSIASM:
        return state - 1;
        // return Object.assign({}, state, {count: state.count - 1});
    }
  return state;
}

// tudo reducer
export function todo(state = [], action: TodoAction) {
  switch (action.type) {
    case INCREMENT_TODO:
        return [action.key, ...state];
    //   return Object.assign({}, state, {todo: [...state.todo, action.key]});
    case DECREMENT_TODO:
        return [...state.filter((_, index) => index !== action.index)];
        // return Object.assign({}, state, {todo: [...state.todo.filter((_, index) => index !== action.index)]});
    }
  return state;
}