import './App.css';

// import { DatePicker } from 'antd';
import * as React from 'react';

import logo from './logo.svg';
import Demo from './modules/index/content';
import AppRouter from './modules/index/header';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Demo />
        <AppRouter />
        {/* <DatePicker onChange={this.datePickerOnChange} /> */}
      </div>
    );
  }

  public datePickerOnChange(e: any){
    console.log('DatePickerChange', e)
  }
}



// tsconfig.json包含了工程里TypeScript特定的选项。
// tslint.json保存了要使用的代码检查器的设置，TSLint。
// package.json包含了依赖，还有一些命令的快捷方式，如测试命令，预览命令和发布应用的命令。
// public包含了静态资源如HTML页面或图片。除了index.html文件外，其它的文件都可以删除。
// src包含了TypeScript和CSS源码。index.tsx是强制使用的入口文件。

export default App;
