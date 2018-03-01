
import { createStore } from 'redux';
import updateStore from '../reducers/updateStore';

const store = createStore(updateStore,{arr:[]},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
