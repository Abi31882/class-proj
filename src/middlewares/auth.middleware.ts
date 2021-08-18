import { authActions } from "../actions/auth.actions";
import { me as meApi } from "../api/auth";

export const me = () => {
  // authActions.fetching()
  meApi().then((u) => authActions.fetch(u));
};
