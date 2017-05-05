
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions ,ActionConst} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import TaskRow from './TaskRow';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'
import { setTask,updateTimeSpent,pauseTask,finishTask,laterTask } from '../../actions/task';
class TaskList extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    tasks: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
  }
  constructor() {
        super();
        this.interval = null;
    }
  componentDidMount() {
        this.interval = setInterval(this.props.updateTimeSpent, 2000);
    }
  render() {
    const { props: { name, index, list, tasks } } = this;
    // console.log(tasks);
    let taskList =  Array();
    for (let i=0; i < tasks.length; i++){
      let item = tasks[i];
      if (item.status != "finished" && item.status != "later")
        taskList.push(<TaskRow  index={i} item={item} setTask={this.props.setTask}
                                pauseTask={this.props.pauseTask}
                                laterTask={this.props.laterTask}
                                finishTask={this.props.finishTask}
                                key={i}/>)
            }
    return (
        <Content>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-8010283700967425/7369304597"
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError} />
          {taskList.map(function(item,i){
              return item;
            })}
            <ActionButton
              buttonColor="rgba(231,76,60,1)"
              onPress={() => { Actions.newTask()}}
            />
        </Content>


    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    updateTimeSpent: () => dispatch(updateTimeSpent()),
    setTask: index => {dispatch(setTask(index));},
    pauseTask: index => {dispatch(pauseTask(index));},
    finishTask: index => {dispatch(finishTask(index));},
    laterTask: index => {dispatch(laterTask(index));},
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
  tasks: state.task.tasks,
});


export default connect(mapStateToProps, bindAction)(TaskList);

