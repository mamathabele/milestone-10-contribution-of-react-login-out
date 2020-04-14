const initialState = {
  isLogged: false,
};
function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isLogged: true,
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}

export default AppReducer;
