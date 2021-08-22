import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import Button from "../components/Button/Button";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarToggled } from "../actions/ui.actions";
import { useDispatch, useStore } from "react-redux";
import { uiSelector } from "../selectors/uiSelectors";
import { useState } from "react";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const user = useAppSelector(meSelector);
  const sidebarToggle = useAppSelector(uiSelector);

  const [sidebarOpened, setsidebarOpened] = useState(true);

  const onsvgClick = () => {
    setsidebarOpened(sidebarOpened ? false : true);
  };

  return (
    <div className="flex-col items-center justify-start pt-6 pl-6 mr-16 space-y-6 bg-gray-400">
      <GiHamburgerMenu onClick={onsvgClick} />

      {sidebarOpened && (
        <div className="h-screen mr-16 bg-gray-400 w-80">
          <div className="text-3xl">This is the Sidebar</div>

          <div className="text-red-500 ">
            <span className="text-black">Name : </span>
            {user!.first_name}
          </div>
          <Link className="text-blue-500" to="/recordings">
            Recordings
          </Link>

          <Button
            className="bottom-0"
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
