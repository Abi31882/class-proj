import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE_COMPLETE,
} from "../actions/action.constants";
import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds } from "./entity.reducer";

export interface GroupsState extends EntityState<Group> {
  query: string;
  loading: boolean;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  loading: false,
  queryMap: {},
};

export const groupReducer: Reducer<GroupsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;

      return {
        ...state,
        query: query,
        loading: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];

      const groupIds = getIds(groups);

      const newState = addMany(state, groups) as GroupsState;

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loading: false,
      };
    case GROUP_FETCH_ONE_COMPLETE:
      return addOne(state, action.payload) as GroupsState;

    default:
      return state;
  }
};
