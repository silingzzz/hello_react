import React, { Component } from 'react'
import './index.css'

// 在react中，组件就是一个继承于Component的一个类
export default class index extends Component {
    // 定义组件的状态(数据)
    state = {
        // 定义一个学生对象
        student: {
            name: '张三',
            age: 25,
            sex: '男'
        },
        // 学生数组
        students: [
            {
                no: 1,
                name: '周杰伦',
                age: 40,
                sex: '男'
            }, {
                no: 2,
                name: '许嵩',
                age: 30,
                sex: '男'
            }, {
                no: 3,
                name: '迪丽热巴',
                age: 25,
                sex: '女'
            }
        ],
        activeIndex: 0
    }

    // 定义组件方法，要使用箭头函数
    updataStudent = () => {
        let { student } = this.state
        student.name = '李四'
        student.age = 30
        student.sex = '女'
        // 重新渲染页面
        this.setState({
            student: student
        })
    }
    delStudent = (no) => {
        if (window.confirm('确定删除吗？')) {
            let { students } = this.state
            let index = students.findIndex(s => s.no === no)
            students.splice(index, 1)
            this.setState({
                students: students
            })
        }
    }
    changeActive = (index) => {
        // 直接更新高亮索引并重新渲染页面
        this.setState({
            activeIndex: index
        })
    }
    // 渲染组件
    render() {
        // 从状态中获取数据
        const { student, students, activeIndex } = this.state
        // 返回模板渲染后的内容
        return (
            // 模板里面的样式只能写className
            <div className='hello'>
                hello
                <h2>学生信息</h2>
                <p>姓名：{student.name}</p>
                <p>年龄：{student.age}</p>
                <p>性别：{student.sex}</p>
                <p>
                    <button onClick={this.updataStudent}>修改学生信息</button>
                </p>
                <hr />
                <ul className='students'>
                    {
                        students.map((s, index) => {
                            return (
                                <li key={s.no} className={activeIndex === index ? 'active' : ''} onClick={() => this.changeActive(index)}>
                                    <span>{s.name + ' ' + s.age + ' ' + s.sex}&nbsp;&nbsp;</span>
                                    <button onClick={() => this.delStudent(s.no)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
