import { Request, Response } from "express";

async function getRecipes(request: Request, response: Response) {
  console.log("getRecipes");
  response.send({ status: "success", message: "getRecipes" });
}

async function getRecipeById(request: Request, response: Response) {
  console.log("getRecipeId");
  response.send({ status: "success", message: "getRecipeId" });
}

async function postRecipe(request: Request, response: Response) {
  console.log("postRecipe");
  response.send({ status: "success", message: "postRecipe" });
}

async function patchRecipe(request: Request, response: Response) {
  console.log("patchRecipe");
  response.send({ status: "success", message: "patchRecipe" });
}

export default { getRecipes, getRecipeById, postRecipe, patchRecipe };
