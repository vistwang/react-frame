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
    public textInput: HTMLInputElement | null;
    constructor(props: MyProps) {
        super(props);
    }

    public render() {
        const { todo, onIncrementTodo, onDecrementTodo } = this.props;
        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.charCode === 13) {                
                if(this.textInput && this.textInput.value) {
                    onIncrementTodo(this.textInput.value);
                    this.textInput.value = '';
                }
            }
        };
        const handleClick = (nub: number) => {
            onDecrementTodo(nub)
        };

        const addClick = () => {
            if(this.textInput && this.textInput.value) {
                onIncrementTodo(this.textInput.value);
                this.textInput.value = '';
            }        };

        return (
            <div>
                <input type='text' ref={(input) => { this.textInput = input; }} title='添加待办' onKeyPress={handleKeyPress} /><button onClick={addClick}>+</button>
                <ol>
                    {
                        todo.map((item: any, index: number) => (
                            <li key={index}>
                                {item}
                                <span onClick={() => handleClick(index)} style={{'display': 'inline-block', 'color': 'red', 'padding': '5px'}}>x</span>
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    } 
}