import Button from 'antd/es/button';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Index() {
  return (
      <div>
        <h2>Home</h2>
        <Xdd me='10' you='10'/>
      </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

interface IState{
    age: number,
    sex: string,
}

interface IProps{
    me: string,
    you: string
}

class Xdd extends React.Component<IProps, IState> {
    public static defaultProps = {
        // ...
    }
    public readonly state: {
        age: number;
        sex: string;
      } = {
          sex: '男',
          age: 18,
        };
    // public readonly state = {} as IState;

    public render() {
        return (
          <div className='App'>
            <Button type='primary'>Button</Button>
          </div>
        );
      }
    // 小技巧：如果state很复杂不想一个个都初始化，可以结合类型断言初始化state为空对象或者只包含少数必须的值的对象：  readonly state = {} as IState;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/users/'>Users</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact={true} component={Index} />
        <Route path='/about/' component={About} />
        <Route path='/users/' component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
