
import { createStore } from 'redux';
import updateStore from '../reducers/updateStore';

const store = createStore(updateStore,{arr:[]});
export default store;
