import express, { Request, Response } from "express";

function logIn(request: Request, response: Response) {
  response.status(200).send({
    status: "success",
    message: `logIn: ${request.body}`,
  });
}

function signUp(request: Request, response: Response) {
  response.status(200).send({
    status: "success",
    message: `signUp: ${request.body}`,
  });
}

export default { logIn, signUp };
