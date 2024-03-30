import { useContext, useReducer } from "react";
import { createContext } from "react";
import Reducer from "../Reducer/LoginReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const intialstate = {
    isLogin: false,
    isLoading: false,
  };
  const [state, dispatch] = useReducer(Reducer, intialstate);
  console.log(intialstate);

  const Removetoken = () => {
    dispatch({ type: "REMOVE_USER" });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, Removetoken }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
