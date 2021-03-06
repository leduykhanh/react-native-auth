
import type { Action } from './types';

export const SET_TASK = 'SET_TASK';
export const UPDATE_TIME_SPENT = 'UPDATE_TIME_SPENT';
export const PAUSE_TASK = 'PAUSE_TASK';
export const NEW_TASK = 'NEW_TASK';
export const FINISH_TASK = 'FINSIH_TASK';
export const LATER_TASK = 'LATER_TASK';

export function setTask(index:number):Action {
  return {
    type: SET_TASK,
    payload: index,
  };
}

export function pauseTask(index:number):Action {
  return {
    type: PAUSE_TASK,
    payload: index,
  };
}

export function finishTask(index:number):Action {
  return {
    type: FINISH_TASK,
    payload: index,
  };
}
export function laterTask(index:number):Action {
  return {
    type: LATER_TASK,
    payload: index,
  };
}

export function updateTimeSpent():Action {
  return {
    type: UPDATE_TIME_SPENT
  };
}

export function newTask(item:object):Action {
  // console.log(item);
  return {
    type: NEW_TASK,
    payload: item,
  };
}
