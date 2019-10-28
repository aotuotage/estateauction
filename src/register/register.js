import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import "../login/login.css";
import axios from 'axios';
import Qs from 'qs';

class Register extends Component{
    constructor(){
        super(); 
        this.handleChangeone = this.handleChangeone.bind(this);
        this.handleChangetwo = this.handleChangetwo.bind(this);
        this.qutSubmit = this.qutSubmit.bind(this);
        this.state = {
            username:"",
            password:""
        }
    }
    handleChangeone(e){
        let _this = this;
        _this.setState ({
            username: e.target.value
        });
    }
    handleChangetwo(e){
        let _this = this;
        _this.setState ({
            password: e.target.value
        });
    }
    qutSubmit(e){
        console.log(this.state.username)
        if(this.state.username === "" || this.state.password === ""){
           alert("不能为空")
           return false     
        }
        let data = Qs.stringify({
            'username':this.state.username,
            'password':this.state.password
        });
        axios({
            method: 'POST',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            url: 'http://localhost:3000/register',
            data: data
        })
        .then( data => {
            console.log(data)
           if(data.data.isreg === true){
               alert("注册成功");
               this.props.history.push("/login");
           }else{
               alert(data.data.result.msg)
           }
        })
    }
    render() {
      return  <div>
      <Header></Header>
      <div className="universe">
        <div className="solarsystem">
            <div className="sun"></div>
            <a className="orbit mercury" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit venus" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit earth" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit mars" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit jupiter" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit saturn" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit uranus" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit neptune" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
            <a className="orbit pluto" target="_blank" href="">
                <div className="planet">
                    <div className="ball"></div>
                </div>
            </a>
        </div>
        <div className="login_div">
            <p>注册</p>
            <label>用户名：</label><input type="text" placeholder="请输入用户名" onChange={this.handleChangeone} value={this.state.username} className="username"></input>
            <label>密  码：</label><input type="password" placeholder="请输入密码" onChange={this.handleChangetwo} value={this.state.password} className="password"></input>
            <button type="button" onClick={this.qutSubmit} className="submit">提交</button>
        </div>
    </div>
      <Footer></Footer>
      </div>
    }
}

export default Register;