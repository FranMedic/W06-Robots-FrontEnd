import { rest } from "msw";
import { getFakeRobots } from "../factories/robotsFactory";

const ulrApi = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(ulrApi, (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          _id: "618560f227992e4f22e6ae6b",
          name: "MangoBB",
          image:
            "https://www.avforums.com/styles/avf/editorial/block//fac1e024ab104fa9939221aa7a592a15_3x3.jpg",
          features: {
            _id: "6187e4148befc07bb8293db6",
            velocity: 2,
            resistance: 5,
            creationData: "2015-06-05",
          },
        },
        {
          _id: "6185611d27992e4f22e6ae6c",
          name: "Manivela",
          image:
            "https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/40952/1530552727-31404-3391/Fender_20Pinwheeler_large.jpg",
          features: {
            _id: "6187e4148befc07bb8293db7",
            velocity: 8,
            resistance: 7,
            creationData: "2012-11-24",
          },
        },
      ])
    );
    return resp;
  }),

  rest.get(ulrApi + "/1", async (req, res, ctx) => {
    const resp = res(ctx.json(getFakeRobots()));
    return resp;
  }),
];
