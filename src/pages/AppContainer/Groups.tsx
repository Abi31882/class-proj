import React, { memo, useEffect } from "react";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../middlewares/groups.middleware";
import Input from "../../components/input/Input";
import {
  groupsLoadingSelector,
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
import { FaSpinner } from "react-icons/fa";

const Groups: React.FC = () => {
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupsSelector);

  return (
    <div>
      <div className="flex justify-items-start">
        <Input
          type="text"
          placeholder="write something here"
          value={query}
          onChange={(e) => {
            fetchGroups({ query: e.target.value, status: "all-groups" });
          }}
        ></Input>
        {loading && <FaSpinner className="mt-5 animate-spin"></FaSpinner>}
      </div>
      <div>
        {groups &&
          groups.map((group) => (
            <div
              className="w-full mb-10 space-y-5 border-2 border-black"
              key={group.id}
            >
              <div className="flex justify-between">
                <div>{group.name.toUpperCase()}</div>
                <div className="text-green-500">
                  <span className="text-black"> Description : </span>
                  {group.description}
                </div>
              </div>
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src={group.group_image_url}
                />
              </div>
            </div>
          ))}
        {groups.length === 0 && (
          <div className="text-3xl">
            Oops! No data can be fount regarding your Query :(
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Groups);
