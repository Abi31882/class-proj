import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  children: string;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className={
          "text-blue-500 border border-transparent border-solid rounded-md shadow-lg hover:shadow-none " +
          { className }
        }
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default memo(Button);
