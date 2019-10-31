const RENDER = 'RENDER';
type RENDER = typeof RENDER;
type TypeAction = RENDER;

export interface Myaction{
    type: TypeAction,
    value: number
};
// action maker
export function randAction(): Myaction{
    return {
        type: 'RENDER',
        value: Math.round(Math.random() * 3)
    }
}

// render

export function random(state = 0, action: Myaction){
    if(action.type === RENDER) {
        state = action.value;
    }

    return state;
}