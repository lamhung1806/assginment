const userInitialState = {
  userList: [],
  currentPage: 1,
};
const user = (state = userInitialState, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      return {
        ...state,
        userList: action.payload,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "PREVIOS_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};
export default user;
