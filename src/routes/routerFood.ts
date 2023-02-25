import express, { Router } from "express";

import * as controllerFood from "../controllers/controllerFood";

const router: Router = express.Router();

// MIDDLEWARE //
// MIDDLEWARE //

// ROUTES // ROUTES //
// ROUTES // ROUTES //

router.route("/recipes").get(controllerFood.getAllRecipes);
router.route("/recipes/:id").get(controllerFood.getRecipeById);

// EXPORT // EXPORT //
// EXPORT // EXPORT //

export default router;
