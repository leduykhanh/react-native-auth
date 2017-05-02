
import type { Action } from './types';

export const SET_TASK = 'SET_TASK';

export function setTask(index:number):Action {
  return {
    type: SET_TASK,
    payload: index,
  };
}

/**
 * Created by User on 5/2/2017.
 */
