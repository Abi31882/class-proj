import { AppState } from "../store";

export const meSelector = (state: AppState) =>
  state.auth.id !== undefined ? state.users.byId[state.auth.id] : undefined;
