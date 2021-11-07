import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  loadRobotsThunk,
} from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);

  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  return {
    robots,
    loadRobots,
    createRobot,
  };
};

export default useRobots;
