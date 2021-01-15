import { LOGIN, LOGOUT } from "../constants";
import { State } from "./userContext";

interface Action {
  type: string;
  payload: any;
}

export const userReducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: payload,
        email: payload.email
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null
      };

    default:
      return {
        ...state
      };
  }
};
