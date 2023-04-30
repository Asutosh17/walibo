import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { LocationReducer } from './reducer';


const middleware = [thunk];

const rootReducer = combineReducers({
  locations : LocationReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;