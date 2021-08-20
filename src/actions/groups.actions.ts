import { Group } from "../models/Group";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
} from "./action.constants";

export const QueryChangedAction = (query: string) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
});

export const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});
