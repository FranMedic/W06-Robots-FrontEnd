import RobotCard from "../RobotCard/RobotCard";

const RobotList = () => {
  return (
    <>
      <div className="col-8 list-container">
        <ul>
          <li>
            <RobotCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default RobotList;
