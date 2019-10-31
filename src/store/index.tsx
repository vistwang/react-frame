import { combineReducers, createStore } from 'redux';

import { random } from '../actions/RandomNumber';
import { count, todo } from '../reducers';
import { initStoreState } from '../types';

// 创建唯一 store
export const rootStore = createStore(combineReducers({count, todo, random}), initStoreState);

rootStore.subscribe(() => console.log(rootStore.getState()));
