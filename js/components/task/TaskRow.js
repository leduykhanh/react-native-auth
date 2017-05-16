/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, Text,Button ,Badge} from 'native-base';
import {View} from 'react-native'
import {
  ToastAndroid

} from 'react-native'
// import { Button } from 'react-native-material-design';
import styles from './styles'
import { connect } from 'react-redux';
import {toDateString, toTimeString} from '../../utils/time'

class TaskRow extends Component {
  constructor(props) {
    super(props);
      }
    render(){
        let {index,item,setTask,pauseTask,laterTask, finishTask} = this.props;
        let style = item.status == "on"?styles.on:styles.off;
        return (
            <View style={style} padder>
                <Text>{item.name}</Text>
                <View style={styles.rowView}>
                    <Text>Started at {toDateString(item.startTime,"MMM DD : HH") + ""},</Text>
                     <Badge primary><Text>{toTimeString(item.timeSpent)}</Text></Badge><Text> spent</Text>
                </View>
                <View style={styles.rowView}>
                    {item.status == "on" ?
                        <Button success style={styles.green} title="PAUSE" onPress={() => {pauseTask(index)} }><Text>PAUSE</Text></Button>
                        : <Text></Text>
                    }
                    {item.status == "off"?
                        <Button success style={styles.green} title="START" onPress={() => {setTask(index)} }><Text>START</Text></Button>
                        :<Text></Text>
                    }
                    <Button danger style={styles.red} title="FINISH" onPress={() => {finishTask(index)} } ><Text>FINISH</Text></Button>
                    <Button primary style={styles.red} title="LATER" onPress={() => {laterTask(index)} } ><Text>LATER</Text></Button>
                </View>
            </View>
        )
    }
}
// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
//
//     setTask: index => {dispatch(setTask(index));
//     //    ToastAndroid.show('' + index, ToastAndroid.SHORT);
//     },
//
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//
//     return {
//
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
export default TaskRow;