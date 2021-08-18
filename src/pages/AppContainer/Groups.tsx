import React, { memo, useEffect } from "react";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api/groups";
import Input from "../../components/input/Input";
import {
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

const Groups: React.FC = () => {
  const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector(groupsSelector);

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      groupActions.queryCompleted(query, groups);
    });
  }, [query]);

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="write something"
          value={query}
          onChange={(e) => {
            groupActions.query(e.target.value);
          }}
        ></Input>
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
      </div>
    </div>
  );
};

export default memo(Groups);
