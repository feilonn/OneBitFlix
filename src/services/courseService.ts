import { Course } from "../models";

export const courseService = {
  show: async (id: string) => {
    const coursesWithEpisodes = await Course.findByPk(id, {
      attributes: ["id", "name", "synopsis"],
      include: {
        association: "episodes",
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

  getRandomFeaturedCourses: async() => {
    const featuredCourses = await Course.findAll({
      attributes: [
        'id',
        'name',
        'synopsis',
        ['thumbnail_url', 'thumbnailUrl']
      ],
      where: {
        featured: true
      }
    })

    const randomFeaturedCourses = featuredCourses.sort(() => 0.5 - Math.random());
    return randomFeaturedCourses.slice(0, 3); 
  },

  newest: async () => {
    const newestCourses = await Course.findAll({
      limit: 10,
      order: [['created_at', 'DESC']]
    })

    return newestCourses;
  }
};
