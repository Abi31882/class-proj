import axios, { CancelToken } from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";

  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => response.data.data);
};
