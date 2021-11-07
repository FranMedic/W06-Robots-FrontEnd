import "./App.css";
import RobotForm from "./components/RobotForm/RobotForm";
import RobotList from "./components/RobotList/RobotList";

function App() {
  return (
    <>
      <main className="container ">
        <section className="row justify-content-center">
          <h1>My Robotos</h1>
          <RobotList />

          <RobotForm />
        </section>
      </main>
    </>
  );
}

export default App;
