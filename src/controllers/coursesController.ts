import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/paginationParams";
import { courseService } from "../services/courseService";

export const coursesController = {
  //GET -> /courses/:id
  coursesWithEpisodes: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const course = await courseService.show(id);
      return res.json(course);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  },

  //GET -> /courses/featured
  featuredCourses: async (req: Request, res: Response) => {
    try {
      const courses = await courseService.getRandomFeaturedCourses();
      return res.json(courses);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  },

  //GET -> /courses/newest
  newestCourses: async (req: Request, res: Response) => {
    try {
      const courses = await courseService.newest();
      return res.json(courses);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  },

  //GET -> /courses/search?='teste'
  searchCourses: async (req: Request, res: Response) => {
    const { name } = req.query;
    const [page, perPage] = getPaginationParams(req.query)

    try {
        if(typeof name !== 'string') {
            throw new Error('O nome de pesquisa deve ser uma string');
        }
        const courses = await courseService.findByName(name, page, perPage);
        res.json(courses);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  },
};
