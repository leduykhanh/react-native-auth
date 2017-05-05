
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import FinishedTaskTow from './finishedTaskRow'

class FinishedTask extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    const { props: { tasks } } = this;
    // console.log(tasks);
    let taskList =  Array();
    for (let i=0; i < tasks.length; i++){
      let item = tasks[i];
      if (item.status == "finished")
        taskList.push(<FinishedTaskTow  index={i} item={item} setTask={this.props.setTask}
                                pauseTask={this.props.pauseTask}
                                laterTask={this.props.laterTask}
                                finishTask={this.props.finishTask}
                                key={i}/>)
            }

    return (
        <Content padder>
          {taskList}
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


export default connect(mapStateToProps, bindAction)(FinishedTask);
