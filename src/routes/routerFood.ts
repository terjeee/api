import express, { Router } from "express";

import tryCatch from "../utils/tryCatch";
import * as controllerFood from "../controllers/controllerFood";

const router: Router = express.Router();

// MIDDLEWARE //
// MIDDLEWARE //

// ROUTES // ROUTES //
// ROUTES // ROUTES //

router.route("/recipes").post(tryCatch(controllerFood.postRecipe)).get(tryCatch(controllerFood.getRecipes));
router.route("/recipes/:id").get(tryCatch(controllerFood.getRecipeById));

// EXPORT // EXPORT //
// EXPORT // EXPORT //

export default router;
