import { Request, Response } from "express";
import ModelRecipe from "../models/ModelRecipe";

export async function postRecipe(req: Request, res: Response) {
  const recipe = {
    title: req.body.title,
  };

  await ModelRecipe.create(recipe);

  res.status(200).send({
    ok: true,
    recipe: recipe,
  });
}

export async function getRecipes(req: Request, res: Response) {
  res.send({
    ok: true,
    message: "getRecipes",
  });
}

export async function getRecipeById(req: Request, res: Response) {
  const param = req.params.id;

  res.send({
    ok: true,
    message: `getRecipe${param}`,
  });
}
