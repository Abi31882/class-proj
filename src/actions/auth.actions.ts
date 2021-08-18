import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./action.constants";

const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });
const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);
