import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import AsyncAction from '../../components/AsyncAction';
import LocalePrivider from '../../components/LocalePrivider';
import LocaleSon from '../../components/LocaleSon';
import Medemo from '../../components/Medemo';
import { ConnectComponent, store } from '../../components/reduxDemo';

// 三种路由
// 1 url 路由
// 2 hash路由 支持低版本；浏览器
// 3 内存路由 url 不变，页面会切换

// 核心 api
// 1 Link 
// 2 NavLink 能动态添加 activeClassName="xxx"
// 3 Prompt 满足条件时候，提示用户是否离开当前页面
// 4 Redirect 重定向当前页面，例如登录判断
// 5 Route 路由匹配时候显示对应组件 exact 是否精确匹配 可以多匹配多显示
// 6 Switch 只显示第一个匹配的路由

// 通过url 传递参数 页面状态尽量通过URL 参数定义

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
        <AsyncAction />
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