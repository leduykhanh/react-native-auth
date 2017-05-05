
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem ,Badge} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
      let {props:{tasks}} = this;
      let onGoingCount = tasks.filter(function(x){return x.status=="on" || x.status=="off"}).length;
      let laterCount = tasks.filter(function(x){return x.status=="later"}).length;
      let finsihedCount = tasks.filter(function(x){return x.status=="finished"}).length;
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer(); }} >
          <Text>Home</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.finishTask(); this.props.closeDrawer(); }} >
          <Text>Finished </Text><Badge success><Text>{finsihedCount}</Text></Badge>
        </ListItem>
          <ListItem button onPress={() => { Actions.laterTask(); this.props.closeDrawer(); }} >
          <Text>Later </Text><Badge info><Text>{laterCount}</Text></Badge>
        </ListItem>
        <ListItem button onPress={() => { Actions.taskList(); this.props.closeDrawer(); }} >
          <Text>Tasks</Text><Badge><Text>{onGoingCount}</Text></Badge>
        </ListItem>
       <ListItem button onPress={() => { Actions.report(); this.props.closeDrawer(); }} >
          <Text>Report</Text><Badge><Text>new</Text></Badge>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}
const mapStateToProps = state => ({
  tasks: state.task.tasks,
});
export default connect(mapStateToProps, bindAction)(SideBar);
