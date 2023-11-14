import express from "express";
import * as controller from "./memos.controller.js"
import * as validator from "./memos.validator.js"
import * as auth from "../auth/index.js"
import { methodNotAllowed } from "../errors/index.js";
const router = express.Router()

// This is better left off until testing frontend or pushing to production
// router.use(auth.isLoggedIn)
router.route("/")
    .post([validator.validateCreateMemo, controller.createMemo])
    .get(controller.getMemos)
    .put([validator.validateUpdateMemo, controller.updateMemos])
    .delete(controller.destroyMemos)
    .all(methodNotAllowed)

export default router