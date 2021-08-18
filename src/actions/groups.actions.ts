import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./action.constants";

export const QueryAction = (query: string, loading: boolean) => ({
  type: GROUPS_QUERY,
  payload: { query, loading },
});

export const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

export const groupActions = bindActionCreators(
  {
    query: QueryAction,
    queryCompleted: QueryCompletedAction,
  },
  store.dispatch
);
