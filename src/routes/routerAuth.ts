import express from "express";

import controllerAuth from "../controllers/controllerAuth";

const router = express.Router();

// ROUTER MIDDLEWARE //
// ROUTER MIDDLEWARE //

// ROUTES // ROUTES //
// ROUTES // ROUTES //

router.route("/login").post(controllerAuth.logIn);
router.route("/signup").post(controllerAuth.signUp);

// EXPORT // EXPORT //
// EXPORT // EXPORT //

export default router;
