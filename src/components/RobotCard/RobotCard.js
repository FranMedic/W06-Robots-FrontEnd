const RobotCard = ({
  robot: {
    name,
    image,
    features: { velocity, resistance, creationData },
  },
}) => {
  return (
    <>
      <div className="card w-300">
        <img className="card-img-top" src={image} alt="{name}" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Velocity: {velocity}</li>
            <li class="list-group-item">Resistance:{resistance}</li>
            <li class="list-group-item">CreationDate:{creationData}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RobotCard;
