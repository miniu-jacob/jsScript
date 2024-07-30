// shortCut : rcc (React Class Component)

import React, { Component } from 'react'

// 클래스 컴포넌트를 만드는 과정
// 1. App.js 에서 필요한 내용들을 가지고 온다. (예시에서는 2줄)
// 2. counter2 라는 state를 만들어야 한다.
// 3. increase 함수도 만들어 준다. 
// 4. index.js 에 가서 <App /> 을 <AppClass /> 로 바꿔 준다. 


export default class AppClass extends Component {

  // state 만들기
  // a. 생성자  constructor (props) {}
  // b. super(props) 
  // c. state라는 객체를 하나 만들고 이 안에 내용을 넣는다.
  constructor(props) {
    super(props)
    this.state = {
      counter2: 0, 
      number: 0,
      value: 0
    }
  }

  increase = () => {
    // 컴포넌트가 제공하는 기본 함수 
    this.setState({counter2: this.state.counter2 + 1, value: this.state.value +1})
  }

  render() {
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        
      </div>
    )
  }
}

// 
