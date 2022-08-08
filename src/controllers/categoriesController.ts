import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/paginationParams";
import { categoryService } from "../services/categoryService";

export const categoriesController = {
   //GET -> /categories
  index: async (req: Request, res: Response) => {

    const [page, perPage] = getPaginationParams(req.query);

    try {
      const categories = await categoryService.findAllPaginated(page, perPage);
      return res.json(categories);
    } catch (error) {
        if(error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
  },

  //GET -> /categories/:id
  categoryWithCourses: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const category = await categoryService.show(id);
        return res.json(category);
    } catch (error) {
        if(error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
  }
};
