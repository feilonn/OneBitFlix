import { Category } from "../models";

export const categoryService = {
    findAllPaginated: async (page: number, perPage: number) => {
        //Pula os primeiros 'offset' registros
        //ex: page = 2, perPage = 10 -> offset = 10 -> pula os primeiros 10 registros
        const offset = (page - 1) * perPage;

        const { rows, count } = await Category.findAndCountAll({
            attributes: ["id", "name", "position"],
            order: [["position", "ASC"]],
            limit: perPage,
            offset: offset
        })

        return {
            categories: rows,
            page: page,
            perPage: perPage,
            total: count
        }
    }
}