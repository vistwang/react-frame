import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { decrementTodo, incrementTodo } from '../actions';
import Todo from '../components/Todo';
import { StoreState } from '../types';

// 用来存放待办事件

const mapTodoStateToProps = (state: StoreState) => ({
    todo: state.todo
});

const mapTodoDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        onIncrementTodo: (value: string) => incrementTodo(value),
        onDecrementTodo: (nub: number) => decrementTodo(nub)
    }, dispatch)
);

// 使用 connect 高阶组件对 todo 进行包裹
export const TodoCon = connect(mapTodoStateToProps, mapTodoDispatchToProps)(Todo);
