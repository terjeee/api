import type { Request, Response, NextFunction } from "express";

const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.status(200).send({ error: error.message });
};

export default errorHandler;
