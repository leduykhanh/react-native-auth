/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, View,Text } from 'native-base';
import {
  ToastAndroid

} from 'react-native'
import { Button } from 'react-native-material-design';
import styles from './styles'
import { setTask } from '../../actions/task';
import { connect } from 'react-redux';

class TaskList extends Component {
  constructor(props) {
    super(props);
      }
    render(){
        let {index,item} = this.props;
        let style = item.status == "on"?styles.on:styles.off;
        return (
            <View style={style}>
                <Text>{item.name}</Text>
                <View style={styles.rowView}>
                    <Text>Started at {item.startTime + ""}</Text>
                    <Text>{item.timeSpent} hours spent</Text>
                </View>
                <View style={styles.rowView}>
                    <Button value="PAUSE" onPress={() => {this.props.setTask(index)} } />
                    <Button value="RESUME" onPress={() => {this.props.setTask(index)} } />
                    <Button value="FINISH" onPress={() => {this.props.setTask(index)} } />
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {

    setTask: index => {dispatch(setTask(index));
    //    ToastAndroid.show('' + index, ToastAndroid.SHORT);
    },

  }
}
const mapStateToProps = (state, ownProps) => {

    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);