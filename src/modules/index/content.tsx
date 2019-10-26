import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import LocalePrivider from '../../components/context';
import LocaleSon from '../../components/contextson';
import Medemo from '../../components/demo';
import { ConnectComponent, store } from '../../components/reduxDemo';

export const enString: IMyLang = {
    submit: 'Submit',
    cancel: 'Cancel'
};

export const cnString: IMyLang = {
    submit: '提交',
    cancel: '取消'
};

export const LocaleContext = React.createContext(cnString);

export interface IMyLang {
    submit: string,
    cancel: string
}

function Demo() {
    // 函数子组件
  return (
    <Router>
      <div>
        <Medemo>
            {(name: React.ReactNode) => {
                return <h1>{name}</h1>
            }}
        </Medemo>
        <Provider store={store}>
            <ConnectComponent />
        </Provider>
        <LocalePrivider>
            <div>
                <br/>
                <LocaleSon />
            </div>
        </LocalePrivider>
        <Header />
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }: any) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }: any) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact={true}
        path={match.path}
        render={
            render
        }
      />
    </div>
  );
}

function render() {
    return <h3>Please select a topic.</h3>
}

function Header() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/topics'>Topics</Link>
      </li>
    </ul>
  );
}

export default Demo;