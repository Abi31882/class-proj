import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}

const Input: FC<Props> = ({
  id,
  touched,
  error,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <div className="flex items-center space-x-5">
        <input
          id={id}
          {...rest}
          className="pb-3 mb-5 border-b-2"
          placeholder={placeholder}
        />
      </div>
      {touched && <div className="text-red-600">{error}</div>}
    </div>
  );
};
Input.defaultProps = {};

export default memo(Input);
