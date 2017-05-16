
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import task from './task';
import Datastore from 'react-native-local-mongodb';
var db = new Datastore({ filename: 'asyncStorageKey', autoload: true });
const persistToMongo = (state) => {
  db.remove({}, { multi: true }, function (err, numRemoved) {
});
  db.insert(state, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
}
const reducers = combineReducers({
  // state: (state = {}) => state,
  drawer,
  user,
  list,
  task

});
const finalReducer = (state, action) => {
    const nextState = reducers(state, action);

    //use whatever module you use to write to mongo...
    persistToMongo(nextState);

    return nextState;
};
export default finalReducer;