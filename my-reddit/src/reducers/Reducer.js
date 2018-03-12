export default function Reducer(state, action) {
  if(action.type==="update"){
    return Object.assign({}, state, {
      arr: action.arr
    });
  }else if(action.type==="ChangeLoadingStatus"){
    return Object.assign({}, state, {
      loadingStatus: action.loadingStatus
    });
  }
  return state;

}
