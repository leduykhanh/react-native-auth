
import type { Action } from '../actions/types';
import { SET_TASK } from '../actions/task';
import {initialState} from './list'

export default function (state =initialState, action:Action) {

  if (action.type === SET_TASK) {
      var tasks = state.tasks;
      console.log(tasks);
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

