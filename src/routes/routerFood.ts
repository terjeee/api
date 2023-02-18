import express, { Router } from "express";

import controllerFood from "../controllers/controllerFood";

const router: Router = express.Router();

// MIDDLEWARE //
// MIDDLEWARE //

// ROUTES // ROUTES //
// ROUTES // ROUTES //

router.route("/recipes").get(controllerFood.getRecipes).post(controllerFood.postRecipe);
router.route("/recipes/:id").get(controllerFood.getRecipeById).patch(controllerFood.patchRecipe);

// EXPORT // EXPORT //
// EXPORT // EXPORT //

export default router;
