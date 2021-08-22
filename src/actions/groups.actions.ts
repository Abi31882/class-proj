import { Group } from "../models/Group";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETE,
} from "./action.constants";

export const QueryChangedAction = (query: string) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
});

export const QueryCompletedAction = (query: string, groups: Group[]) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

export const fetchOneGroup = (id: number) => ({
  type: GROUP_FETCH_ONE,
  payload: id,
});

export const fetchOneGroupComplete = (group: Group) => ({
  type: GROUP_FETCH_ONE_COMPLETE,
  payload: group,
});
