import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const coursesController = {
    //GET -> /courses/:id
    coursesWithEpisodes: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
           const course = await courseService.show(id);
           return res.json(course); 
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
        }
    },

    featuredCourses: async(req: Request, res: Response) => {
        try {
            const courses = await courseService.getRandomFeaturedCourses();
            return res.json(courses);
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
        }
    }
}