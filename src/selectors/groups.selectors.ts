import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupQueryLoadingSelector],
  (query, loadingMap) => loadingMap[query]
);

export const groupsSelector = createSelector(
  [groupQuerySelector, groupByIdSelector, groupQueryMapSelector],
  (query, byId, queryMap) => {
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
