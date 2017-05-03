
import type { Action } from './types';

export const SET_TASK = 'SET_TASK';
export const UPDATE_TIME_SPENT = 'UPDATE_TIME_SPENT';
export const PAUSE_TASK = 'PAUSE_TASK';
export const NEW_TASK = 'PAUSE_TASK';

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

export function updateTimeSpent():Action {
  return {
    type: UPDATE_TIME_SPENT
  };
}

export function newTask(item:object):Action {
  return {
    type: NEW_TASK,
    payload: item,
  };
}
