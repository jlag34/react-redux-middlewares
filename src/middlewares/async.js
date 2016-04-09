export default function({dispatch}){
  return next => action => {
    // if action does not have a payload or does not have a .then property
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    
    // make sure action's promise resolves
    action.payload
      .then(response => {
        // create a new action with old type but replace promise with data
        const newAction = {...action, payload: response}
      // put new data through all middlewares again
      dispatch(newAction);    
    });
  }
}