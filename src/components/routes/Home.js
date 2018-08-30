import React, {Component} from "react";
import HomePage from '../HomePage';

export default class Home extends Component{
  render(){
    return (
      <div>
        <HomePage history={this.props.history}/>
      </div>
    );
  }
}