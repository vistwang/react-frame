import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { randAction } from '../actions/RandomNumber';
import { Random } from '../components/Random';
import { StoreState } from '../types';

// 用来存放待办事件

const mapRandomStateToProps = (state: StoreState) => ({
    value: state.random
});

const mapRandomDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        onRandom: () => randAction(),
    }, dispatch)
);

// 使用 connect 高阶组件对 todo 进行包裹
export const RandomCon = connect(mapRandomStateToProps, mapRandomDispatchToProps)(Random);
