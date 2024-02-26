import express, { Router } from "express";
import { createTags, fetchTags } from "../controllers/tagControllers";

const router: Router = express.Router();

/**
 * @openapi
 * /tag:
 *   post:
 *     title: Post Tags
 *     summary: CreateTags
 *     description: Create a tag
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              title: Tag new
 *     responses:
 *       201:
 *         description: Returns 200 on successful creation.
 */
router.post("/", createTags);

/**
 * @openapi
 * /tag:
 *   get:
 *     title: Get Tags
 *     summary: FetchTags
 *     description: fetch all tags
 *     responses:
 *       200:
 *         description: Returns the list of all tags.
 */
router.get("/", fetchTags);

export { router as tagsRouter };
