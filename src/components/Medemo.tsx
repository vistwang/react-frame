import * as React from 'react';
import { clearInterval } from 'timers';

interface IMyComponentState {
    date: Date
}

interface IMyComponentProps {
    name?: string;
    age?: number;
    children?: (data: any) => {}
}
export default class Medemo extends React.Component<IMyComponentProps, IMyComponentState> {
    private timeID: NodeJS.Timeout;
    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    public componentWillMount() {
        console.log('componentWillMount'); 
    }

    public componentDidMount(){
        console.log('componentDidMount');
        this.timeID = setInterval(() => this.tick(), 1000); 
    }

    public componentWillUpdate(preProps: IMyComponentProps, preStates: IMyComponentState) {
        console.log(preProps);
        console.log(preStates);
        
        console.log('componentWillUpdate'); 
    }

    public componentDidUpdate() {
        // console.log('componentDidUpdate'); 
    }

    public componentWillUnmount() {
        console.log('componentWillUnmount'); 
        clearInterval(this.timeID);
    }

    // 获取render之前的dom状态
    public getSnapshotBeforeUpdate() {
        // return this.rootNode.
        // console.log('getSnapshotBeforeUpdate'); 
    }

    public tick() {
        this.setState({
            date: new Date()
        })
    }

    public render() {
        return (
            <div>
                {this.props.children && this.props.children('我是时间')}
                <h2>
                    It is {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }

}