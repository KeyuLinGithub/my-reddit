
import Loading from './Loading';
import updateStore from './updateStore';

function rootReducer(state = {}, action) {
  return {
    Loading: Loading(state.loadingStatus, action),
    updateStore: updateStore(state.arr, action)
  };
}
export default rootReducer;
