import React, { Component } from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import axios from 'axios';
import "./goland.css";
import Qs from 'qs';

class Goland extends Component{
    constructor(props){
      super(props); 
        this.subBtn = this.subBtn.bind(this);
        this.handleChangeone = this.handleChangeone.bind(this);
        this.handleChangetwo = this.handleChangetwo.bind(this);
        this.handleChangethree = this.handleChangethree.bind(this);
        this.handleChangefour = this.handleChangefour.bind(this);
        this.handleChangefive = this.handleChangefive.bind(this);
        this.handleChangesix = this.handleChangesix.bind(this);
        let uname = JSON.parse(sessionStorage.getItem("data"));
        console.log(props)
        this.state={
            text:props.location.state.landid,
            username:uname.userInfo.uid
        }
    }
    componentDidMount() {
        if(sessionStorage.getItem("data")){
            
        }else{
            alert("请登录！")
            this.props.history.push("/");
        }
    }
    handleChangeone(e){
        let _this = this;
        _this.setState ({
            name: e.target.value
        });
    }
    handleChangetwo(e){
        let _this = this;
        _this.setState ({
            nameid: e.target.value
        });
    }
    handleChangethree(e){
        let _this = this;
        _this.setState ({
            address: e.target.value
        });
    }
    handleChangefour(e){
        let _this = this;
        _this.setState ({
            bank: e.target.value
        });
    }
    handleChangefive(e){
        let _this = this;
        _this.setState ({
            bankid: e.target.value
        });
    }
    handleChangesix(e){
        let _this = this;
        _this.setState ({
            buynum: e.target.value
        });
    }
    subBtn(){
        let _this =this;
        if(_this.state.name && _this.state.nameid && _this.state.address && _this.state.bank && _this.state.bankid && _this.state.buynum){
            
        }else{
            alert("不能为空！")
            return false
        }
        console.log(JSON.stringify(_this.state))
        let data = Qs.stringify(_this.state);
        axios({
            method: 'POST',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            url: 'http://localhost:3000/buyland',
            data: data
        })
        .then( data => {
            if(data.data.states === 200){
                alert("提交成功，等待回复！")
                _this.props.history.push("/");
            }else{
                console.log(data)
            }
        })
    }
    render() {
      return  <div>
      <Header></Header>
        <div className='buyland'>
            <h3>火星第{this.state.text}号地拍卖资质申请</h3>
            <div className='buylist'>
                <label>企业名称：</label><input name='name' onChange={this.handleChangeone} placeholder='如和信贷'></input>
            </div>
            <div className='buylist'>
                <label>企业注册号：</label><input name='nameid' onChange={this.handleChangetwo} placeholder='如91110000094875448C'></input>
            </div>
            <div className='buylist'>
                <label>联系方式：</label><input name='address' onChange={this.handleChangethree} placeholder='如13241838491'></input>
            </div>
            <div className='buylist'>
                <label>开户银行：</label><input name='bank' onChange={this.handleChangefour} placeholder='如招商银行北京万达支行'></input>
            </div>
            <div className='buylist'>
                <label>银行账户：</label><input name='bankid' onChange={this.handleChangefive} placeholder='如110910565010908'></input>
            </div>
            <div className='buylist'>
                <label>竞标出价：</label><input name='buynum' onChange={this.handleChangesix} placeholder='如一千万'></input>
            </div>
            <button onClick={this.subBtn} className="subbtn">提交</button>
        </div>
      <Footer></Footer>
      </div>
    }
}

export default Goland;