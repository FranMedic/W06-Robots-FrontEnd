const RobotForm = () => {
  return (
    <>
      <div className=" col-4 form-container">
        <form autocomplete="off" onSubmit="" noValidate>
          <label htmlFor="robotName" className="form-label">
            Robot Name
          </label>
          <input
            type="text"
            id="robotName"
            placeholder="Name"
            required
            className="mb-2 form-control"
          />

          <label htmlFor="robotImage" className="form-label">
            Robot Image
          </label>
          <input
            type="url"
            id="robotImage"
            placeholder="Image"
            required
            className="mb-2 form-control"
          />

          <label htmlFor="robotVelocity" className="form-label">
            Velocity
          </label>
          <input
            type="number"
            id="robotVelocity"
            placeholder="Velocity"
            required
            className="mb-2 form-control"
          />

          <label htmlFor="robotResitance" className="form-label">
            Resistance
          </label>
          <input
            type="number"
            id="robotResitance"
            placeholder="Resistance"
            required
            className="mb-2 form-control"
          />
          <label htmlFor="robotDate" className="form-label">
            Creation date
          </label>
          <input
            type="date"
            id="robotDate"
            placeholder="dd/mm/yyyy"
            required
            className="mb-2 form-control"
          />

          <button
            disabled=""
            onClick=""
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