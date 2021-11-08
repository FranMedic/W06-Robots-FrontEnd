import { useState } from "react";

import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const { user } = useUser();
  const intialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(intialData);

  const onChangeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className=" col-4 form-container">
        <form autoComplete="off" onSubmit={onSubmit} noValidate>
          <div className="mb-3 row">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="UserName"
              value={userData.username}
              onChange={onChangeData}
              required
              className="mb-2 form-control"
            />
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              type="password"
              value={userData.password}
              placeholder="Password"
              onChange={onChangeData}
              required
              className="form-control"
              id="password"
            />
          </div>
          <button
            value="Submit"
            className="btn btn-primary mt-1 mb-5"
            type="submit"
          >
            {user.isAuthenticated ? "Logout" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
