import { SIDEBAR_TOGGLE } from "../actions/action.constants";

export const SidebarToggled = (value: boolean) => ({
  type: SIDEBAR_TOGGLE,
  payload: value,
});
