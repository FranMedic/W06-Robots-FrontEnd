import { useEffect, useState } from "react";

import useRobots from "../../hooks/useRobots";

const RobotForm = () => {
  const { createRobot } = useRobots();

  const initialData = {
    name: "",
    image: "",
    velocity: "",
    resistance: "",
    creationData: "",
  };

  const [robotData, setRobotData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      robotData.name !== "" &&
      robotData.image !== "" &&
      robotData.creationData !== "" &&
      robotData.resistance !== "" &&
      robotData.velocity !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    robotData.creationData,
    robotData.image,
    robotData.name,
    robotData.resistance,
    robotData.velocity,
  ]);

  const onChangeData = (event) => {
    setRobotData({
      ...robotData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const robotDataFinal = {
      name: robotData.name,
      image: robotData.image,
      features: {
        velocity: robotData.velocity,
        resistance: robotData.resistance,
        creationData: robotData.creationData,
      },
    };
    createRobot(robotDataFinal);
  };

  return (
    <>
      <div className=" col-4 form-container">
        <form autoComplete="off" onSubmit={onSubmit} noValidate>
          <label htmlFor="name" className="form-label">
            Robot Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={robotData.name}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />

          <label htmlFor="image" className="form-label">
            Robot Image
          </label>
          <input
            type="url"
            id="image"
            placeholder="Image"
            value={robotData.image}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />

          <label htmlFor="velocity" className="form-label">
            Velocity
          </label>
          <input
            type="number"
            id="velocity"
            placeholder="Velocity"
            value={robotData.velocity}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />

          <label htmlFor="resistance" className="form-label">
            Resistance
          </label>
          <input
            type="number"
            id="resistance"
            placeholder="Resistance"
            required
            value={robotData.resistance}
            onChange={onChangeData}
            className="mb-2 form-control"
          />
          <label htmlFor="creationData" className="form-label">
            Creation date
          </label>
          <input
            type="date"
            id="creationData"
            placeholder="dd/mm/yyyy"
            value={robotData.creationData}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />

          <button
            value="Submit"
            disabled={isDisabled}
            className="btn btn-primary mt-5"
            type="submit"
          >
            Add Robot
          </button>
        </form>
      </div>
    </>
  );
};

export default RobotForm;
