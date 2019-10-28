import React, { Component } from 'react';
import { createStore } from 'redux';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props); 
        let data;
        if(sessionStorage.getItem("data")){
          data =  JSON.parse(sessionStorage.getItem("data"))
        }

        this.getOut = this.getOut.bind(this);
        if(data && data.isLogin == true){
          this.state = {
            lishow: 'block',
            blishow:'none',
            name:data.userInfo.uid
          }
        }else{
          this.state = {
            lishow: 'none',
            blishow:'block'
          }
        }
    }
    componentWillReceiveProps(nextProps){
      let _this =this;
      if (_this.props.tiger !== nextProps.tiger){
          if(nextProps.tiger== false){
            _this.setState({
              lishow: 'none',
              blishow:'block'
            })
          }else{
            let data =  JSON.parse(sessionStorage.getItem("data"));
            _this.setState({
              lishow: 'block',
              blishow:'none',
              name:data.userInfo.uid
            })
          }
      }
    }
    getOut(){
      let _this =this;
      sessionStorage.setItem("data",'');
      window.location.href='http://localhost:3001'     
    }
    render() {
      return <div className="header">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li style={{display:this.state.blishow}}><Link to="/login">login</Link></li>
          <li style={{display:this.state.blishow}}><Link to="/register">register</Link></li>
          <li style={{display:this.state.lishow}}>欢迎：{this.state.name}</li>
          <li onClick={this.getOut} style={{display:this.state.lishow}}>退出</li>
        </ul>
    </div>
    }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: false }),
    PayDecrease: () => dispatch({ type: true })
  }
}
Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header;