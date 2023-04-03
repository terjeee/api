import { Request, Response, NextFunction } from "express";

interface Controller {
  (request: Request, response: Response): Promise<void>;
}

export default function (controller: Controller) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await controller(request, response);
    } catch (error) {
      return next(error);
    }
  };
}
