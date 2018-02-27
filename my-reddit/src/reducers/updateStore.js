export default function updateStore(state, action) {
  if(action.type==="update"){
    return Object.assign({}, state, {
      arr: action.arr
    });
  }
  return state;

}
