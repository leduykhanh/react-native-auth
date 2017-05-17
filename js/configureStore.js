
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';
import * as asyncInitialState from 'redux-async-initial-state';
import Datastore from 'react-native-local-mongodb';
var db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

export default function configureStore(onCompletion:()=>void):any {

  const initialState = {
        drawer :{  drawerState: 'closed',
                    drawerDisabled: true,},
          user :{
              name: '',
            },
          list:{
              list: [
                'Tasks',
                'History',
                'Report',
              ],
              selectedIndex: 0,//0: TaskList
            },
          task : {tasks:[]}
  }
  const loadStore = (currentState = initialState) => {
    return new Promise(resolve => {
      db.find({})
        // .then(response => {console.log(response);response.json()})
        .then(tasks => {
          console.log(tasks);
          resolve({
          // reuse state that was before loading current user 
          ...currentState,
          // and replace only `currentUser` key 
          task: {tasks :tasks}
              });

             });
        });
      };
    const enhancer = compose(
    applyMiddleware(thunk, promise,asyncInitialState.middleware(loadStore)),
    devTools({
      name: 'nativestarterkit', realtime: true,
    }),
  );
  // const storeCreator = applyMiddleware(asyncInitialState.middleware(loadStore));
  // const store = storeCreator(reducer,enhancer);
  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
    }


