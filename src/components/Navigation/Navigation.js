import { useSelector } from "react-redux";

const Navigation = () => {
  const { isAuthenticated } = useSelector((user) => user.isAuthenticated);
  return (
    <>
      <nav>
        <ul>{isAuthenticated ? <li>Logout</li> : <li>Login</li>}</ul>
      </nav>
    </>
  );
};

export default Navigation;
