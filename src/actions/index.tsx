import * as constants from '../constants';

// 存储一些 actions 以及创建这些 actions 的函数
export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

// todo 接口
export interface INCREMENTTODO {
    type: constants.INCREMENT_TODO;
    key: string
}

export interface DECREMENTTODO {
    type: constants.DECREMENT_TODO;
    index: number
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
export type TodoAction = INCREMENTTODO | DECREMENTTODO;

// 增加 state 次数的方法
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}
// 减少 state 次数的方法
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

// 增加 todo 次数的方法
export function incrementTodo(value: string): INCREMENTTODO {
    return {
        type: constants.INCREMENT_TODO,
        key: value
    }
}
// 减少 todo 次数的方法
export function decrementTodo(nub: number): DECREMENTTODO {
    return {
        type: constants.DECREMENT_TODO,
        index: nub
    }
}

