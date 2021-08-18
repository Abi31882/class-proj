import axios, { Canceler } from "axios";
import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../api/groups";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  groupActions.query(query);

  canceler && canceler();

  const { cancel, token } = axios.CancelToken.source();

  canceler = cancel;

  fetchGroupsApi(request, token).then((groups) => {
    groupActions.queryCompleted(query, groups);
    canceler = undefined;
  });
};
