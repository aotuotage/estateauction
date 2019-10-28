import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Placelist extends Component{
    constructor() {
        super(); // 调用基类的所有初始化方法
        this.toland = this.toland.bind(this);
        this.state = {
          list: [
              {title:"1.火星一号地皮",listId:1},
              {title:"2.火星一号地皮",listId:2},
              {title:"3.火星一号地皮",listId:3},
              {title:"4.火星一号地皮",listId:4},
              {title:"5.火星一号地皮",listId:5},
              {title:"6.火星一号地皮",listId:6},
              {title:"7.火星一号地皮",listId:7},
            ]
        }
    }
    toland(){

        if(sessionStorage.getItem("data")=="" || sessionStorage.getItem("data")==null){
            this.props.history.push("/login");
        }else{
            this.props.history.push("/goland");
        }
    }
    render() {
        let items = [];
        this.state.list.map((item, index) => {
            items.push(<li key={index}>
            <Link to={{hash: "#/goland",state:{landid:item.listId}}}>
                <p>{item.title}</p>
                <button className="compete_btn" type="button" onClick={this.toland} data-id={item.listId}>竞标</button>
            </Link>
            </li>);
        })
      return <ul>
          {items}
        </ul>
    }
}

export default Placelist;