
import type { Action } from '../actions/types';
import { SET_INDEX,SET_TASK } from '../actions/list';

export type State = {
    list: string,
}

export const initialState = {
  list: [
    'Tasks',
    'History',
    'Report',
  ],
  selectedIndex: 0,//0: TaskList
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
