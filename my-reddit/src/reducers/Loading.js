export default function Loading(state, action) {
  if(action.type==="ChangeLoadingStatus"){
    return Object.assign({}, state, {
      loadingStatus: action.loadingStatus
    });
  }
  return state;

}
