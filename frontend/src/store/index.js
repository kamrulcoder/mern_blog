import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";

const  rootReducer = combineReducers({

})


const middleware = [ThunkMiddleware]


const store = createStore(rootReducer , compose(applyMiddleware(...middleware) ,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store ; 