import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";

export interface authState {
  id?: number;
}

const initialState = {};

export const authReducer: Reducer<authState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_LOGIN:
    case ME_FETCH:
      const userId = action.payload.id as number;
      return { ...state, id: userId };
    default:
      return state;
  }
};
