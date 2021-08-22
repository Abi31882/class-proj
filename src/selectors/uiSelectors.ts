import { createSelector } from "reselect";
import { uiStateSelector } from "./app.selectors";

export const uiSelector = createSelector(
  [uiStateSelector],
  (uiState) => uiState.isSidebarOpen
);
