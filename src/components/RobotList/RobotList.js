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
          {robots.map((robot, index) => (
            <li className="row" key={index}>
              <RobotCard robot={robot} key={robot.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RobotList;
