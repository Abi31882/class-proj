import React, { memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import Input from "../../components/input/Input";
import { login } from "../../api/auth";
import { authActions } from "../../actions/auth.actions";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [password, setPassword] = useState(false);

  const togglePassword = () => {
    setPassword(password ? false : true);
  };

  const history = useHistory();

  const {
    handleSubmit,
    touched,
    errors,
    isValid,
    getFieldProps,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    }),
    onSubmit: (data) => {
      login(data).then((u) => {
        authActions.login(u);
        history.push("/dashboard");
      });
    },
  });

  return (
    <div className="flex flex-col items-center w-screen pt-8 lg:w-1/2 space-y-28">
      <div className="flex flex-col space-y-14">
        <div className="space-y-4 ">
          <h1 className="text-4xl">Log In to CORK</h1>

          <div className="flex justify-start ">
            <h2>New Here?</h2>
            <Link to="/signup" className="text-blue-600 underline">
              Create an account
            </Link>
          </div>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="w-full">
            <Input
              id="email"
              error={errors.email}
              touched={touched.email}
              required
              {...getFieldProps("email")}
              placeholder="email address"
            />
          </div>
          <div>
            <Input
              id="password"
              type={password ? "text" : "password"}
              error={errors.password}
              touched={touched.password}
              autoComplete="off"
              required
              {...getFieldProps("password")}
              placeholder="password"
            />
          </div>

          <div className="flex items-center space-x-28">
            <div className="flex items-center">
              <label>Show Password</label>
              <input onClick={togglePassword} type="checkbox" />
            </div>
            <Button type="submit" disabled={!isValid}>
              Log in
            </Button>
          </div>
        </form>
        <div className="flex flex-col items-center space-y-5">
          <div className="flex items-center ">
            <input id="loggedin" name="Toggle button" type="checkbox" />
            <label className="switch" htmlFor="loggedin">
              Keep me logged in
            </label>
          </div>
          <div>{isSubmitting}</div>
          <Link to="/notfound" className="text-blue-600">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="max-w-md text-center">
        <p>
          © 2020 All Rights Reserved. CORK is a product of Designreset. Cookie
          Preferences, Privacy, and Terms.
        </p>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);

// username= user2@devslane.com
// password= Password12
