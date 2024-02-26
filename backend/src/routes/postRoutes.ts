import express, { Router } from "express";
import { createPosts, fetchPosts } from "../controllers/postControllers";

const router: Router = express.Router();

/**
 * @openapi
 * /post:
 *   post:
 *     tags:
 *       - default
 *     summary: CreatePosts
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: Test 4 big
 *               desc: Description text for testing bombay
 *               image: imageBase64
 *               author: Priyanshu Mishra
 *               tags:
 *                 - 65dcab6955e3601713c97747
 *                 - 65dcab85cb6174f576b77c5b
 *                 - 65dcab6955e3601713c97747
 *                 - 65dcb34f277bb6305f2300b6
 *     responses:
 *       201:
 *         description: Returns 200 on successful creation.
 */
router.post("/", createPosts);

/**
 * @openapi
 * /post:
 *   get:
 *     title: Get Posts
 *     summary: FetchPosts
 *     description: fetch all posts
 *     parameters:
 *     - name: page
 *       in: query
 *       schema:
 *         type: integer
 *       example: '1'
 *     - name: limit
 *       in: query
 *       schema:
 *         type: integer
 *       example: '10'
 *     - name: sort
 *       in: query
 *       schema:
 *         type: string
 *       example: updatedAt
 *     - name: sortOrder
 *       in: query
 *       schema:
 *         type: string
 *       example: asc
 *     - name: keyword
 *       in: query
 *       schema:
 *         type: string
 *       example: bombay
 *     - name: tag
 *       in: query
 *       schema:
 *         type: string
 *       example: 65dcb34f277bb6305f2300b6
 *     responses:
 *       200:
 *         description: Returns the list of all posts.
 */
router.get("/", fetchPosts);

export { router as postsRouter };
