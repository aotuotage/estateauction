import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import "./about.css";

class About extends Component{
    constructor(){
      super(); 
      this.state={
        text:""
      }
    }
    componentDidMount() {
      var _this = this;
        fetch("http://localhost:3000/about").then(response => {
            return response.json()
          }).then( data => {
                _this.setState({
                  text:data.text[0].text
                })
                console.log(this.state.text)
          })
    }
    render() {
      return  <div>
      <Header></Header>
        <div className='about'>
            <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
        </div>
      <Footer></Footer>
      </div>
    }
}

export default About;