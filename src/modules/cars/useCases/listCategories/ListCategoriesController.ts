import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private ListCategoriesUseCase: ListCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const all = this.ListCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
