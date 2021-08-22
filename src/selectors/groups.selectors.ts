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

export const queryIdSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector],
  (query, queryMap) => queryMap[query] || []
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupsLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

export const selectedErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne
);

const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const selectedLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);

export const selectedGroupIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const selectedGroupSelector = createSelector(
  [groupByIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]
);

export const groupsSelector = createSelector(
  [queryIdSelector, groupByIdSelector],
  (groupsIds, byId) => {
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
