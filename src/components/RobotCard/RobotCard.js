const RobotCard = ({ robot }) => {
  return (
    <>
      <div className="card w-300">
        <img className="card-img-top" src={robot.image} alt={robot.name} />
        <div className="card-body">
          <h5 className="card-title">{robot.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Velocity: {robot.features.velocity}
            </li>
            <li className="list-group-item">
              Resistance:{robot.features.resistance}
            </li>
            <li className="list-group-item">
              CreationDate:{robot.features.creationData}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RobotCard;
