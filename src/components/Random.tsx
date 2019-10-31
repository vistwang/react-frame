
import * as React from 'react';

import { Myaction } from '../actions/RandomNumber';

interface MyProps {
    value: number;
    onRandom: () => Myaction;
}
export class Random extends React.PureComponent<MyProps>{
    constructor(props: MyProps) {
        super(props);
    }
    public render() {
        const { value, onRandom } = this.props;
        return (
            <div>
                <button onClick={onRandom}>产生10以内随机数 --- {value}</button>
            </div>
        )
    }
}