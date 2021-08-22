import { useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.actions";
import { groupByIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

const GroupDetailPage: React.FC = () => {
  const groupId = +useParams<{ groupId: string }>().groupId;

  const groupByIds = useAppSelector(groupByIdSelector);
  const group = groupByIds[groupId];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneGroup(groupId));
  }, [groupId]);

  if (!group) {
    return <div>Loading Group</div>;
  }

  return (
    <div>
      <div>
        <Link className="text-blue-700 hover:underline font-" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
      <div className="text-3xl">
        this is the detail page of
        <span className="font-bold text-blue-700">
          {" "}
          {group.name.toUpperCase()}{" "}
        </span>
        of
        <span className="font-bold text-blue-700"> id: {group.id}</span>
      </div>
      <Link
        className="hover:underline hover:text-blue-500"
        to={"/groups/" + (groupId + 1)}
      >
        next Group
      </Link>
    </div>
  );
};

export default memo(GroupDetailPage);
