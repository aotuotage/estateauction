import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import Popup from './popup';

class Problem extends Component{
    constructor(){
        super(); 
        this.handleChange = this.handleChange.bind(this);
        this.qutSubmit = this.qutSubmit.bind(this);
        this.state = {
            text: "",
            msg:"",
            display:"none"
        }
    }
    qutSubmit(e){
        if(sessionStorage.getItem("data")==""){
            this.props.history.push("/login");
            return false  
        }
        if(this.state.text === ""){
            alert("不能为空")
           return false     
        }
        let uname = JSON.parse(sessionStorage.getItem("data"))
        let data = Qs.stringify({
            'text':this.state.text,
            'username':uname.userInfo.uid
        });
        let _this =this;
        axios({
            method: 'POST',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            url: 'http://localhost:3000/problem',
            data: data
        })
        .then( data => {
            if(data.data.states === 200){
                console.log(data.data.msg)
                _this.setState({
                    msg:data.data.msg,
                    display:"flex"
                })
            }else{
                console.log(data)
            }
        })
    }
    handleChange(e){
        let _this = this;
        _this.setState ({
            text: e.target.value
        });
    }
    handleDisplay(e){
        this.setState({
            display:"none"
        })
    }
    render() {
      return  <form action="javascript:;" method="get">
      <textarea placeholder="请填入问题详情，我们会第一时间联系您！" onChange={this.handleChange} value={this.state.text} className="input_text" type="text" name="qutext">
      </textarea>
      <input onClick={this.qutSubmit} type="submit" className="subbtn" value="提交"/>
      <Popup msg={this.state.msg} handleDisplay={this.handleDisplay.bind(this)} display={this.state.display}></Popup>
    </form>
    }
}

export default Problem;