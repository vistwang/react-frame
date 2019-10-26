import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { decrementEnthusiasm, incrementEnthusiasm } from '../actions';
import Counter from '../components/Counter';
import { StoreState } from '../types';

// mapStateToProps 将当前store里的数据以我们的组件需要的形式传递到组件。
// mapDispatchToProps 利用dispatch函数，创建回调props将actions送到store。

// 用来存放需要与数据交互的组件
const mapStateToProps = (state: StoreState) => ({
    value: state.count || 0
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        onIncrement: () => incrementEnthusiasm(),
        onDecrement: () => decrementEnthusiasm()
    }, dispatch)
);


// 使用 connect 高阶组件对 Counter 进行包裹
export const CounterCon = connect(mapStateToProps, mapDispatchToProps)(Counter);