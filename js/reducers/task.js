/*

status : off, on, finished, later
 */
import type { Action } from '../actions/types';
import { SET_TASK ,UPDATE_TIME_SPENT,PAUSE_TASK,NEW_TASK} from '../actions/task';

export type State = {
    tasks: object,
}
export const initialState = {

  tasks:[
      {name: "Task 1", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'later',timeSpent:0},
      {name: "Task 2", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'finished',timeSpent:0},
      {name: "Task 3", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'off',timeSpent:0},
      {name: "Task 4", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'finished',timeSpent:0},
      {name: "Task 5", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'off',timeSpent:0},
      {name: "Task 6", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'off',timeSpent:0},

  ]
};
export default function (state:State = initialState, action:Action) {

  if (action.type === SET_TASK) {
      var tasks = [...state.tasks];
       // console.log(state);
      for(let i=0; i < tasks.length; i++){
          tasks[i].status = "off";
          // tasks[i].name = "off" + i;
          if (i==action.payload) {
            tasks[i].status = "on";
            // tasks[i].name = "on" + i;
          }
      }
       // tasks[action.payload].status = "on";
      //state.tasks = tasks;
      return {
          ...state,
          tasks: tasks
      }
  }
  if (action.type === UPDATE_TIME_SPENT){
      var tasks = [...state.tasks];
      for(let i=0; i < tasks.length; i++){
          if(tasks[i].status == "on"){
              tasks[i].timeSpent += 1;
          };
      }

      return {
          ...state,
          tasks: tasks
      }
  }
  if (action.type === PAUSE_TASK) {
      var tasks = [...state.tasks];
      tasks[action.payload].status = "off";

      return {
          ...state,
          tasks: tasks
      }
  }
  if (action.type === NEW_TASK){
      var tasks = [...state.tasks];
      tasks.push(action.payload);

      return {
          ...state,
          tasks: tasks
      }
  }
  return state;
}

