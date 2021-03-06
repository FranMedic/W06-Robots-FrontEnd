import { useEffect, useState } from "react";

import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const { user, login, logout } = useUser();
  const initialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData.password, userData.username]);

  const onChangeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onLogin = (event) => {
    event.preventDefault();
    login({ username: userData.username, password: userData.password });
  };
  const onLogout = (event) => {
    event.preventDefault();
    logout();
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
  };

  return (
    <>
      <div className=" col-4 form-container">
        <form
          autoComplete="off"
          onSubmit={user.isAuthenticated ? onLogout : onLogin}
          noValidate
        >
          {user.isAuthenticated ? (
            ""
          ) : (
            <>
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
            </>
          )}

          <button
            value="Submit"
            className="btn btn-primary mt-1 mb-5"
            type="submit"
            disabled={isDisabled}
          >
            {user.isAuthenticated ? "Logout" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
