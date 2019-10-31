import axios from 'axios';
import * as React from 'react';

// import { ajax } from 'rxjs/ajax';

export default class AsncAction extends React.Component{
    public doRequest = axios.get('http://www.reddit.com/r/reactjs.json');
    public render() {
        return (
            <ul>
            <li>
                111
            </li>
            </ul>
        )
    }

}