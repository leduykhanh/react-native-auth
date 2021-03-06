
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import { closeDrawer } from './actions/drawer';

import Login from './components/login/';
import Home from './components/home/';
import TaskList from './components/task/';
import NewTask from './components/task/newTask';
import LaterTask from './components/task/laterTask';
import FinishTask from './components/task/finishedTask';
import Report from './components/task/report';
import BlankPage from './components/blankPage';
import SideBar from './components/sideBar';
import { statusBarColor } from './themes/base-theme';
import { Actions,ActionConst } from 'react-native-router-flux';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }


  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }


  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'login':
        return <Login />;
      case 'home':
        return <Home />;
      case 'blankPage':
        return <BlankPage />;
      case 'taskList':
        return <TaskList />;
            case 'laterTask':
        return <LaterTask />;
            case 'finishTask':
        return <FinishTask />;
      case 'newTask':
        return <NewTask />;
      case 'report':
        return <Report />;
      default :
        return <Login />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="default"
        />
        <RouterWithRedux>
          <Scene key="root" >
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="home" component={Home} >
              <Scene type={ActionConst.RESET} key="taskList" component={TaskList} />
              <Scene type={ActionConst.RESET} key="newTask" component={NewTask} />
              <Scene type={ActionConst.RESET} key="laterTask" component={LaterTask} />
              <Scene type={ActionConst.RESET} key="finishTask" component={FinishTask} />
              <Scene type={ActionConst.RESET} key="report" component={Report} />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
