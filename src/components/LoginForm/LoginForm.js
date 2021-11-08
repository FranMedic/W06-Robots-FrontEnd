import { useState } from "react";

const LoginForm = () => {
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
          <div class="mb-3 row">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={userData.username}
              onChange={onChangeData}
              required
              className="mb-2 form-control"
            />
          </div>
          <div class="mb-3 row">
            <label htmlFor="password" class="form-label">
              Password
            </label>

            <input
              type="password"
              value={userData.username}
              onChange={onChangeData}
              requiredclass="form-control"
              id="password"
            />
          </div>
        </form>
      </div>
    </>
  );
};
