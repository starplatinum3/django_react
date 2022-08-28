import React, { Component } from 'react';
import $ from 'jquery';
import './button.css';
// Common
// import { getClassName } from '../../common/common';
// import { getClassName } from '../Common/common';
import { baseUrl } from '../../util/Common';
export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            res: "",
        }
    }

    post() {
        console.log("click post button")
        const react_this = this;
        // Common
        // var url="http://172.20.180.22:8080/index/rest_api/debug/"
        var url=`${baseUrl}/index/rest_api/debug/`
        var mychoice=1
        $.post(url,{mychoice:mychoice}, function(result){
            console.log(result)
            react_this.setState({res:result});
        })
    }

    postTest() {
      console.log("click post button")
      const react_this = this;
      // Common
      // var url="http://172.20.180.22:8080/index/rest_api/debug/"
      var url=`${baseUrl}/index/rest_api/test/`
      var mychoice=1
      $.post(url,{mychoice:mychoice}, function(result){
        console.log("result");
          console.log(result)
          react_this.setState({res:result});
      })
  }


    get(){
        // var url="http://172.20.180.22:8080/index/rest_api/debug/"
        var url=`${baseUrl}/index/rest_api/debug/`
        console.log("click get button")
        const react_this = this;
        $.get(url, function(result){
          console.log("result");
            console.log(result)
            react_this.setState({res:result});
        })
    }

    getTest(){
      // var url="http://172.20.180.22:8080/index/rest_api/debug/"
      var url=`${baseUrl}/index/rest_api/test/`
      console.log("click get button")
      const react_this = this;
      $.get(url, function(result){
        console.log("result");
          console.log(result)
          let jsonStr= JSON.stringify(result)
          react_this.setState({res:jsonStr});
      })
  }

    //componentDidMount() {
    //    this.get()
    //}

  render() {
    var res = this.state.res
    return (
      <div>
        <button className='btn' onClick={this.get.bind(this)}> GET </button>
        <button className='btn' onClick={this.post.bind(this)}> POST </button>
        <button className='btn' onClick={this.postTest.bind(this)}> postTest </button>
        <button className='btn' onClick={this.getTest.bind(this)}> getTest </button>
        
        <p> result:  { res }</p>
      </div>
    );
  }
}