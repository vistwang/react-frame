import * as React from 'react';

import { cnString, enString, IMyLang, LocaleContext } from '../modules/index/content';

interface IMyComponentState {
    lang: IMyLang
}
// 全局性的theme 或者全局性的多语言 context使用
export default class LocalePrivider extends React.Component<{}, IMyComponentState>{
    constructor(props: any) {
        super(props);
        this.state = {
            lang: cnString
        }
    }

    public toggleLocale = () => {        
        const lang = this.state.lang === cnString
        ? enString
        : cnString;

        this.setState({lang});
    }

    public render() {
        return (

            <LocaleContext.Provider value={this.state.lang}>
                <button onClick={this.toggleLocale}>切换语言</button>
                {this.props.children}
            </LocaleContext.Provider>
        )
    }
}