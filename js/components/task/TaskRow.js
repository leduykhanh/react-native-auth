/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
export default class TaskList extends Component {
  constructor(props) {
    super(props);
      }
    render(){
        let {item} = this.props;
        return (<div>{item.name}</div>)
    }
}
