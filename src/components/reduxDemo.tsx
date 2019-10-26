import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, combineReducers, createStore } from 'redux';

const INCREMENT = 'add';
const DECREMENT = 'reduce';
interface ModifyAction{
    type: string;
    num?: number
};
 
const InitState = {
    num: 0
};
function count(state = InitState, action: ModifyAction) {
    switch (action.type) {
        case INCREMENT:
        return Object.assign({}, state, {
            num: state.num + 1
        })
        case DECREMENT:
        return Object.assign({}, state, {
            num: state.num - 1
        })
        default:
        return state
    }
};

function todo(state = {}) {
    return state;
}

// action creator
const del = () => {
    return {
        type: 'reduce'
    }
}

const add = () => {
    return {
        type: 'add'
    }
};

export const store = createStore(
    combineReducers({
        count,
        todo
    })
);
store.subscribe(() => console.log(store.getState()));

// bindActionCreators 使用

// del = bindActionCreators(del, store.dispatch);
// add = bindActionCreators(add, store.dispatch);

function myBindActionCreators() {
    return bindActionCreators({del, add}, store.dispatch)
};

function mapStateToProp(state: any) {
    return {
        num: state.count.num
    }
}

interface MyProps {
    del: () => object;
    add: () => object;
    num: number;
}

class Calculator extends React.Component<MyProps, {}>{
    constructor(prop: any) {
        super(prop)
    }

    public render() {
        // tslint:disable-next-line:no-shadowed-variable
        const {del, add, num} = this.props;
        return (
            <div>
                <h3>redux 实现计数</h3>
                <button onClick={del}>-</button>
                <span>{num}</span>
                <button onClick={add}>+</button>
            </div>
        )
    }
}

export const ConnectComponent = connect(mapStateToProp, myBindActionCreators)(Calculator);
