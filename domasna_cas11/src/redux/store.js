import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducer';
import thunk from 'redux-thunk'; 

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
