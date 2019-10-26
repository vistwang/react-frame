import * as React from 'react';

// 创建类型接口
export interface CountProps{
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<CountProps>{
    public render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <h4>{value}</h4>
                <br/>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}