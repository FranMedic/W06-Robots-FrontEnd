import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <div className="col-8 list-container">
        <ul>
          {robots.map((robot) => (
            <li className="row" key={robot.id}>
              <RobotCard robot={robot} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RobotList;
