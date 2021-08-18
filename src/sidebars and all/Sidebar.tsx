import { FC, memo } from "react";
import { logout } from "../api/auth";
import Button from "../components/Button/Button";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  const user = useAppSelector(meSelector);

  return (
    <div className="h-screen mr-16 bg-gray-400 w-80">
      <div className="text-3xl">This is the Sidebar</div>

      <div className="text-red-500 ">
        <span className="text-black">Name : </span>
        {user!.first_name}
      </div>

      <Button
        className="bottom-0"
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
      <img />
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
