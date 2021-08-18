import { FC, memo } from "react";
import Sideimg from "../components/images/sideimg.webp";

interface Props {
  className: string;
}

const AuthHero: FC<Props> = (props) => {
  return (
    <div
      className={
        "fixed right-0 flex flex-col w-1/2 h-screen text-white bg-black " +
        props.className
      }
    >
      <div className="absolute left-0 items-center w-full h-full"></div>
      <img src={Sideimg} alt="some" />
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
