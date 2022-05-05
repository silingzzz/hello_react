// index.js是入口文件

// 引入react核心
import React from 'react';
// 引入reactDOM库
import ReactDOM from 'react-dom/client';
// 引入全局样式
import './index.css';
// 引入APP组件
import App from './App';

// 渲染app组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

