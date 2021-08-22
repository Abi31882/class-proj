import {
  takeLatest,
  takeEvery,
  delay,
  call,
  all,
  put,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE,
} from "../actions/action.constants";
import {
  fetchOneGroupComplete,
  fetchOneGroupError,
  QueryCompletedAction,
} from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/groups";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);

  const groupRes: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(QueryCompletedAction(action.payload, groupRes.data.data));
}

function* fetchOne(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(fetchOneGroup, action.payload);
    yield put(fetchOneGroupComplete(res.data.data));
  } catch (e) {
    const error = e.response.data?.message || "some error occured";
    yield put(fetchOneGroupError(action.payload, error));
  }
}

export function* watchGroupQueryChange() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOne),
  ]);
}
