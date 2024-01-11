const themeInitState = {
  theme: 'blue'
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return { color: 'red' };
    case 'green':
      return { color: 'green' };
    default:
      return { color: 'blue' };
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.val
      };
    default:
      return state;
  }
};

export { themeInitState, counterReducer, colorReducer, themeReducer };
