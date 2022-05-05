// App.js是一个根组件文件

// 从react核心库里面导入React和Component这两个对象
import React, { Component } from 'react'

// 导入App组件的样式
import './App.css'

// 导入其他组件
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建并暴露App组件
export default class App extends Component {
  // 渲染组件内容
  render() {
    return (
      <div className='app'>
        app
        {/* 使用Hello组件 */}
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}
