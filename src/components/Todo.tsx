import * as React from 'react';
import { DECREMENTTODO, INCREMENTTODO } from 'src/actions';

interface MyProps{
    // tslint:disable-next-line:array-type
    todo: Array<any>;
    onIncrementTodo: (value: string) => INCREMENTTODO;
    onDecrementTodo: (nub: number) => DECREMENTTODO
}
export default class Todo extends React.PureComponent<MyProps>{
    public count = 0;
    constructor(props: MyProps) {
        super(props);
    }

    public render() {
        const { todo, onIncrementTodo, onDecrementTodo } = this.props;
        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.charCode === 13) {
                if(true) {
                    onIncrementTodo('33333' + this.count++);
                }
            }
        };
        const handleClick = (nub: number) => {
            onDecrementTodo(nub)
        };
        return (
            <div>
                <input type='text' title='添加待办' onKeyPress={handleKeyPress} /><button>+</button>
                <ul>
                    {
                        todo.map((item: any, index: number) => (
                            <li key={index}>
                                {item}
                                <span onClick={() => handleClick(index)} style={{'display': 'inline-block'}}>x</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}