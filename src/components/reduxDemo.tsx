import { bindActionCreators, combineReducers, createStore } from 'redux';

const INCREMENT = 'add';
const DECREMENT = 'reduce';
interface ModifyAction{
    type: string;
    count?: number
};
 
const InitState = {
    count: 0
};
function reducer(state = InitState, action: ModifyAction) {
    switch (action.type) {
        case INCREMENT:
        return Object.assign({}, state, {
            count: state.count + 1
        })
        case DECREMENT:
        return Object.assign({}, state, {
            count: state.count - 1
        })
        default:
        return state
    }
};

function todo(state = {}) {
    return state;
}

// action creator

function del() {
    return {
        type: 'reduce'
    }
}

function add() {
    return {
        type: 'add'
    }
};

export function run() {
    // combineReducers 绑定多个reducer
    const store = createStore(
        combineReducers({
            reducer,
            todo
        })
    );
    store.subscribe(() => console.log(store.getState()));

    // bindActionCreators 使用
    const delfunc = bindActionCreators(del, store.dispatch);
    const addfunc = bindActionCreators(add, store.dispatch);

    // store.dispatch(add());
    // store.dispatch(add());
    // store.dispatch(del()); 
    addfunc();
    addfunc();
    delfunc();
}