
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import LaterTaskTow from './laterTaskRow'
import Calendar from 'react-native-calendar'

class Report extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    const { props: { tasks } } = this;
        let taskList =  Array();
    for (let i=0; i < tasks.length; i++) {
      let item = tasks[i];
    }
    return (
        <Content padder>
          <Calendar />
        </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
});


export default connect(mapStateToProps, bindAction)(Report);

