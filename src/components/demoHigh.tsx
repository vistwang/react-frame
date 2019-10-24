import * as React from 'react';

// 高阶组件
export default function withTimer(WrappComponent: any) {
    return class extends React.Component {
        public state = {
            time: new Date()
        }
        public timer: NodeJS.Timeout;

        public componentDidMount() {
            this.timer = setInterval(() => this.tick(), 1000);
        }

        public componentWillMount() {
            clearInterval(this.timer);
        }

        public tick() {
            this.setState({
                time: new Date()
            })
        }

        public render() {
            return <WrappComponent time={this.state.time} {...this.props} />
        }
    }
}