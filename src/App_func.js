import './App.css';
import React from 'react'

const Myheader = () => {
  return(
    <header>
    <h1 class="logo"><a href="/">프론트엔드 개발자</a></h1>
    <p>기본언어인 html, css, javascript부터 학습합니다. </p>
  </header>
  )
}

function Mynav(){
  return(
    <nav>
      <ul>
        <li><a href="/" data-id="1">UI/UX 개발</a></li>
        <li><a href="/" data-id="2">재사용이 가능한 UI 개발</a></li>
        <li><a href="/" data-id="3">애니메이션 구현</a></li>
      </ul>
    </nav>
  )
}

const Myarticle = () => {
  return(
    <section>
      <article>
        <h2>Welcome</h2>
        <p>Welcome to FrontEnd</p>       
      </article>
    </section>
  )
}

function App() {
  return (
    <div className='App'>
      <Myheader></Myheader>
      <Mynav></Mynav>
      <Myarticle></Myarticle>
    </div>
  )
}

export default App;