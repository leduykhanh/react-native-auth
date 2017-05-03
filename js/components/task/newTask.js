/**
 * Created by User on 4/28/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label,Button,Text} from 'native-base';
import styles from './styles'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { newTask } from '../../actions/task';

class NewTask extends Component {
  constructor(props) {
    super(props);
      this.state ={
          name: "Task 1", startTime: new Date(), endTime:null, status:'off',timeSpent:0
      }
      }
    changeName(value){
        this.setState({name:value});
    }
    submit(){
        this.props.newTask(this.state);
        Actions.taskList();
    }
    render(){

        return (
            <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input onChange={this.changeName.bind(this)} />
                            </Item>
                            <Button full onPress={() => this.submit()}>
                                <Text>Add </Text>
                            </Button>
                        </Form>
                    </Content>
                </Container>
        )
    }
}
function bindAction(dispatch) {
  return {
    newTask: item => {dispatch(newTask(item));},
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
  tasks: state.task.tasks,
});


export default connect(mapStateToProps, bindAction)(NewTask);

