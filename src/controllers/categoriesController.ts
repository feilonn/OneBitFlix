import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/paginationParams";
import { categoryService } from "../services/categoryService";

export const categoriesController = {
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
};
