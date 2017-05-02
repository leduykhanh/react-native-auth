
import type { Action } from '../actions/types';
import { SET_INDEX,SET_TASK } from '../actions/list';

export type State = {
    list: string
}

export const initialState = {
  list: [
    'Tasks',
    'History',
    'Report',
  ],
  tasks:[
      {name: "Task 1", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 2", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 3", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 4", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 5", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},
      {name: "Task 6", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on',timeSpent:0},

  ],
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }

  if (action.type === SET_TASK) {
      var tasks = state.tasks;
      for(let i=0; i < tasks.length; i++){
          tasks[i].status = "off";
          if (i==action.payload) {
            tasks[i].status = "on";
          }
      }
       // tasks[action.payload].status = "on";
      state.tasks = tasks;
  }
  return state;
}
