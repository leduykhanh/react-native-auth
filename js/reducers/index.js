
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import task from './task';

export default combineReducers({
  state: (state = {}) => state,
  drawer,
  user,
  list,
  task

});
