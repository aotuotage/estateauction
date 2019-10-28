import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './App.css';
import About from './about/about';
import Footer from './component/footer';
import Header from './component/header';
import Placelist from './component/placelist';
import Newslist from './component/newslist';
import Problem from './component/problem';
import Login from './login/login';
import Goland from './goland/goland';

import Register from './register/register';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Index extends Component{
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="banner">
          <div className="banner_img"></div>
        </div>
        <div className="bidding">
            <div className="building">
                <div className="building_left">
                  <h3>在售地皮</h3>
                  <Placelist {...this.props}></Placelist>
                </div>
                <div className="building_right">
                    <h3>问题反馈</h3>
                    <Problem {...this.props}></Problem>
                </div>
            </div>
        </div>
        <div className="newslist">
        <div className="newscontent">
          <Newslist></Newslist>
          <div className="advertisement">
            <p>广告：</p>
            <img src="https://bbs.hexindai.com/data/attachment/forum/201902/20/174532w8ler1ecct7fcsr1.png"/>
            <img src="https://bbs.hexindai.com/data/attachment/forum/201903/15/180433b5mgdg935fge94b7.jpg"/>
            <img src="https://bbs.hexindai.com/data/attachment/forum/201903/29/152029w4n70knga8akr45r.jpg"/>
          </div>
        </div>
        </div>
        <Footer></Footer>
      </div>  
    )
  }
  componentDidMount() {
    new Swiper(this.swiperID, {
        pagination: {
            el: this.paginateID,
        },
    });
  }
}
class App extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/goland" component={Goland}/>
      </Router>
    );
  }
}
export default App
