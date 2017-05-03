
import type { Action } from '../actions/types';
import { SET_TASK } from '../actions/task';

export type State = {
    tasks: object,
}
export const initialState = {

  tasks:[
      {name: "Task 1", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 2", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 3", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 4", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 5", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 6", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},

  ]
};
export default function (state:State = initialState, action:Action) {

  if (action.type === SET_TASK) {
      var tasks = state.tasks;
       // console.log(state);
      for(let i=0; i < tasks.length; i++){
          tasks[i].status = "off";
          tasks[i].name = "off" + i;
          if (i==action.payload) {
            tasks[i].status = "on";
            tasks[i].name = "on" + i;
          }
      }
       // tasks[action.payload].status = "on";
      //state.tasks = tasks;
      return {
          ...state,
          tasks: tasks
      }
  }
  return state;
}

