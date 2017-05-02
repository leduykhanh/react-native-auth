/**
 * Created by User on 5/2/2017.
 */
/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, View,Text } from 'native-base';
import { Button } from 'react-native-material-design';
import styles from './styles'

export default class NewTask extends Component {
  constructor(props) {
    super(props);
      }
    render(){
        let {item} = this.props;
        return (
            <View>
                <Text>{item.name}</Text>
                <View style={styles.rowView}>
                    <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
                    <Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} />
                </View>
            </View>
        )
    }
}

