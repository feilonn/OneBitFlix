import { Course } from "../models";

export const couseService = {
  show: async (id: string) => {
    const coursesWithEpisodes = await Course.findByPk(id, {
      attributes: ["id", "name", "synopsis"],
      include: {
        association: "Episodes",
        attributes: [
          "id",
          "name",
          "synopsis",
          "order",
          "synopsis",
          ["video_url", "videoUrl"],
          ["seconds_long", "secondsLong"],
        ],
      },
    });

    return coursesWithEpisodes;
  },
};
