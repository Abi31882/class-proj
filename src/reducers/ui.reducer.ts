import { AnyAction } from "redux";
import { SIDEBAR_TOGGLE } from "../actions/action.constants";

const initialState = {
  isSidebarOpen: true,
};

export const sideBarReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return { ...state, isSidebarOpen: action.payload };
    default:
      return state;
  }
};
