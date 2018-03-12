
import { createStore } from 'redux';
import Reducer from '../reducers/Reducer';

const store = createStore(Reducer,{arr:[],loadingStatus:false},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
