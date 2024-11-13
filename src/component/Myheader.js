import React, { Component } from 'react'

class Myheader extends Component {
    render(){
      console.log('Myheader 실행');
      return(
        <header>
          <h1 className="logo">
            <a
              href="/"
              onClick={e=>{
                e.preventDefault();
                this.props.onChangeMode();
              }}
              >{this.props.title}</a>
            </h1>
          <p>{this.props.desc}</p>
        </header>
      )
    }
}


export default Myheader;