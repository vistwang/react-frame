import * as React from 'react';

import { LocaleContext } from '../modules/index/content';

export default class LocaleSon extends React.Component{
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <LocaleContext.Consumer>
                {
                    local => (
                        <div>
                            <button>{local.cancel}</button>
                            <button>{local.submit}</button>
                        </div>
                    )
                }
            </LocaleContext.Consumer>
        )
    }
}