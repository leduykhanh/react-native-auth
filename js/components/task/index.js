
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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

class TaskList extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    const { props: { name, index, list } } = this;
    let taskList =  Array();
    for (let i=0; i < this.props.tasks.length; i++){
      let item = this.props.tasks[i];
      taskList.push(<TaskRow key={i} item={item}/>)
            }
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button text="" transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Your today tasks</Title>

          </Body>

          <Right>
            <Button text=""  transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-8010283700967425/7369304597"
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError} />
          {taskList.map(function(item,i){
              return item;
            })}
        </Content>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { console.log("hi")}}
        />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
  tasks: state.list.tasks,
});


export default connect(mapStateToProps, bindAction)(TaskList);

