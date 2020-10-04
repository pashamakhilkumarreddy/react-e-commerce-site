export const buildReducer = (intialState, actionHandlers) => {
  return {
    addAction(action, fn) {
      action = [].concat(action);
      action.forEach(a => {
        const reducers = actionHandlers[a] ? actionHandlers[a] : [];
        actionHandlers[a] = reducers.concat(fn);
      });
    },
    rootReducer(state = intialState, {
      type: action,
      payload,
      ...misc
    }) {
      if (actionHandlers[action]) {
        const prevState = {
          ...state,
        };
        let reducers = actionHandlers[action] ? actionHandlers[action] : [];
        reducers = actionHandlers.default ? reducers.concat(actionHandlers.default) : reducers;
        state = reducers.reduce((acc, cv) => cv(action, acc, payload), prevState);
      }
      return state;
    }
  }
}