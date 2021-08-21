import { takeLatest, delay, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/action.constants";
import { QueryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";

// export function* fetchGroups(action: AnyAction): Generator<any> {
//   const groupRes: any = yield call(fetchGroupsApi, {
//     query: action.payload,
//     status: "all-groups",
//   });

//   yield put(QueryCompletedAction(action.payload, groupRes.data.data));
// }

// export function* watchGroupQueryChange() {
//   yield debounce(1000, GROUPS_QUERY_CHANGED, fetchGroups);
// }

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);

  const groupRes: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(QueryCompletedAction(action.payload, groupRes.data.data));
}

export function* watchGroupQueryChange() {
  yield takeLatest(GROUPS_QUERY_CHANGED, fetchGroups);
}
