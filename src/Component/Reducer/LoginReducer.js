const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      const token = localStorage.getItem("token");
      if (token) {
        return {
          ...state,
          isLogin: true,
          isLoading: true,
        };
      } else {
        console.log("Token not found in local storage.");
        return {
          ...state,
        };
      }

    case "REMOVE_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default Reducer;
