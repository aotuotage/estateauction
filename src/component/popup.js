import React, { Component } from 'react';

class Popup extends Component{
    constructor(props){
        super(props); 
        this.state = {
            display:this.props.display
        }
    }
    componentWillReceiveProps(nextProps){
        let _this =this;
        if (_this.props.display !== nextProps.display){
            _this.setState({
                display:nextProps.display
            })
        }
        if(nextProps.display == "flex"){
            setTimeout(function(){
                console.log(111)
                _this.setState({
                    display:"none"
                })
                _this.props.handleDisplay()
            },1000)
        }
    }
    render() {
      return <div key={this.state.key} className="popup" style={{display:this.state.display}}>
           <p>{this.props.msg}</p>
        </div>
    }
}

export default Popup;