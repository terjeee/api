import { Request, Response } from "express";

export async function getAllRecipes(request: Request, response: Response) {
  console.log("getAllRecipes");
  response.send({ status: "success", message: "getRecipes" });
}

export async function getRecipeById(request: Request, response: Response) {
  console.log("getRecipeById");
  response.send({ status: "success", message: "getRecipeId" });
}
