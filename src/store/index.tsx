import { combineReducers, createStore } from 'redux';

import { count, todo } from '../reducers';

// 创建唯一 store
export const rootStore = createStore(
    combineReducers({
        count, todo
    })
);

rootStore.subscribe(() => console.log(rootStore.getState()));
