import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotForm from "./components/RobotForm/RobotForm";
import RobotList from "./components/RobotList/RobotList";
import useUser from "./hooks/useUser";

function App() {
  const { user } = useUser();
  return (
    <>
      <div className="container ">
        <section className="row justify-content-center">
          <h1>My Robotos</h1>
          <LoginForm />
        </section>
        {user.isAuthenticated ? (
          <section className="row justify-content-center">
            <RobotList />
            <RobotForm />
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;

/* <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path: "/list" element={<ListPage />}></Route> 
      
      
      */
