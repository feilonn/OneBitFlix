import { favoriteService } from './../services/favoriteService';
import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/paginationParams";
import { AuthenticatedRequest } from "../middlewares/auth";
import { courseService } from "../services/courseService";
import { likeService } from "../services/likeService";
import { Course } from '../models/Course';

export const coursesController = {
  //GET -> /courses/:id
  coursesWithEpisodes: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const courseId = req.params.id;

    try {
      const course = await courseService.show(courseId);
      if (!course){
        return res.status(404).json({ message: "Curso não encontrado" });
      }

      const liked = await likeService.isLiked(userId, Number(courseId));
      const favorited = await favoriteService.isFavorited(userId, Number(courseId));
      return res.json({ ...course.get(), favorited, liked });
      
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
    const [page, perPage] = getPaginationParams(req.query);

    try {
      if (typeof name !== "string") {
        throw new Error("O nome de pesquisa deve ser uma string");
      }
      const courses = await courseService.findByName(name, page, perPage);
      res.json(courses);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  },

  // GET /courses/popular
  popular: async (req: Request, res: Response) => {
    try {
      const topTen = await courseService.getTopTenByLikes()
      return res.json(topTen)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
};
