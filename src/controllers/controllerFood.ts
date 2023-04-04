import { Request, Response } from "express";
import ModelRecipe from "../models/ModelRecipe";

export async function postRecipe(req: Request, res: Response) {
  const recipe = {
    title: req.body.title,
    servings: req.body.servings,
    duration_min: req.body.duration_min,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
  };

  await ModelRecipe.create(recipe);

  res.status(200).send({
    ok: true,
    recipe: recipe,
  });
}

export async function getRecipes(req: Request, res: Response) {
  const tours = await ModelRecipe.find({ accepted: true });

  res.send({
    ok: true,
    results: tours.length,
    data: tours,
  });
}

export async function getRecipeById(req: Request, res: Response) {
  const param = req.params.id;
  const tour = await ModelRecipe.find({ accepted: true, _id: param });

  res.send({
    ok: true,
    message: tour,
  });
}
