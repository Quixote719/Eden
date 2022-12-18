export default function earthReducer(state = {}, action: any) {
  switch (action.type) {
    case 'systemInfo':
      return {
        galaxy: action.payload
      };
    default:
      return state;
  }
}
