import { createStore, applyMiddleware} from 'redux'
import reducers from  '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        loggerMiddleware, // neat middleware that logs actions
        thunkMiddleware // lets us dispatch() functions
    )
);
//loggerMiddleware, // neat middleware that logs actions
export default store;