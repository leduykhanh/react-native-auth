
import { AsyncStorage,ToastAndroid } from 'react-native';
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

  var initialState = {
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
          task : {tasks:[
              {name: "Task ccc", startTime: new Date("2017/01/01 12:00"), endTime: new Date("2017/01/02 12:00"), status:'later',timeSpent:0},
          ]}
  }
  const loadStore = (currentState = initialState) => {
    return new Promise(resolve => {
      db.find({}, function(err,tasks){
          console.log("loadStore cccc");
          console.log(tasks);

                  resolve({
                  ...currentState,
                  task: {tasks :tasks}
                      });
                })
        // .then(response => {console.log(response);response.json()})
        // .then(tasks => {
        //   console.log(tasks);
        //   resolve({
        //   ...currentState,
        //   task: {tasks :tasks}
        //       });
        //
        //      });
        });
      };
    const enhancer = compose(
        applyMiddleware(thunk, promise,
           asyncInitialState.middleware(loadStore)
        ),
        devTools({
          name: 'nativestarterkit', realtime: true,
        }),
      );
  // const storeCreator = applyMiddleware(asyncInitialState.middleware(loadStore));
  // const store = storeCreator(reducer,enhancer);
    try{  db.find({}, function(err,tasks){

    initialState.task.tasks = [];
    tasks.map(function(item){
        initialState.task.tasks.push((item));
    });

        })
    }
    catch (error){
        console.log(error);
    }

  const store = createStore(reducer, initialState, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
    }


