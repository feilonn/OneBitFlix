import { Request, Response } from "express";
import { couseService } from "../services/courseService";

export const coursesController = {
    //GET -> /courses/:id
    coursesWithEpisodes: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
           const course = await couseService.show(id);
           return res.json(course); 
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
        }
    }
}