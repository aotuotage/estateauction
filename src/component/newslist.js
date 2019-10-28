import React, { Component } from 'react';

class Newslist extends Component{
    constructor() {
        super(); // 调用基类的所有初始化方法
        this.state = {
          list: []
        }
    }
    componentDidMount() {
        var _this = this;
        fetch("http://localhost:3000/newslist",{credentials: 'include'}).then(response => {
            return response.json()
          }).then( data => {
              if(data.states == 200){
                _this.setState ({
                    list: data.list
                });
              }else{
                console.log("请求出错")
              }
          })
    }
    render() {
        let items = [];
        let _this = this;
        if(Object.keys(_this.state.list).length>0){
          var title = _this.state.list.title
          var img = _this.state.list.img
          for(var i=0; i < title.length; i++){
            items.push( <li key={i}>
              <img src={img[i].img}/>
              <div className="news_title">
                <a href={"http://www.guandian.cn/"+title[i].href} target="_blank">
                  <h3>{title[i].title}</h3>
                </a>
                <p>{title[i].brief}</p>
                <span>{title[i].time}</span>
              </div>
            </li>);
          }
          return <ul>
              {items}
          </ul>
        }else{
          return <ul>
              <li>暂无数据</li>
          </ul>
        }
    }
}

export default Newslist;