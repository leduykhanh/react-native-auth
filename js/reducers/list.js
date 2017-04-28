
import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    'Tasks',
    'History',
    'Report',
  ],
  tasks:[
      {name: "Task 1", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},
      {name: "Task 2", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},
      {name: "Task 3", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},
      {name: "Task 4", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},
      {name: "Task 5", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},
      {name: "Task 6", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'on'},

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
  return state;
}
