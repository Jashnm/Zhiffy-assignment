import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { LOGIN } from "../constants";
import { UserSession } from "../types";
import { userReducer } from "./userReducer";

export interface State {
  user: any | undefined;
  loggedIn: boolean;
  email: string | undefined;
}

const UserContext = createContext<State>({
  loggedIn: false,
  user: null,
  email: null
});

const DispatchContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    loggedIn: false,
    email: null
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(UserContext);
export const useAuthDispatch = () => useContext(DispatchContext);
