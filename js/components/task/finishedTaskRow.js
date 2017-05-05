/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, View,Text,Button ,Badge} from 'native-base';
import {
  ToastAndroid

} from 'react-native'
// import { Button } from 'react-native-material-design';
import styles from './styles'
import { connect } from 'react-redux';
import {toDateString, toTimeString} from '../../utils/time'

class FinishedTaskRow extends Component {
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
                    <Text>End at {toDateString(item.endTime,"MMM DD : HH") + ""},</Text>
                     <Badge primary><Text>{toTimeString(item.timeSpent)}</Text></Badge><Text> spent</Text>
                </View>
                <View style={styles.rowView}>
                    <Button primary style={styles.red} title="ARCHIVE" onPress={() => {laterTask(index)} } ><Text>ARCHIVE</Text></Button>
                </View>
            </View>
        )
    }
}

export default FinishedTaskRow;