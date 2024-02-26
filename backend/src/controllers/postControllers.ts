import { Request, Response } from "express";
import { Posts } from "../models/postModel";

const createPosts = async (req: Request, res: Response) => {
  const { title, desc, image, author, tags } = req.body;
  try {
    await Posts.create({ title, desc, image, author, tags });
    res.status(201).send("Post created successfully");
  } catch (error) {
    res.status(500).send("Post creation failed");
    console.log("[API] Error while creating Post");
    console.log("[API] Error :", error);
  }
};

const fetchPosts = async (req: Request, res: Response) => {
  const {
    page = 1,
    limit = 10,
    keyword = "",
    tag,
    sort = "",
    sortOrder,
  } = req.query;
  try {
    const totalCount = await Posts.countDocuments();
    let queryObj: any = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { desc: { $regex: keyword, $options: "i" } },
      ],
    };
    if (tag) {
      queryObj = { ...queryObj, tags: { $in: [tag] } };
    }
    const posts = await Posts.find(queryObj, null, {
      skip: (Number(page) - 1) * Number(limit),
      limit: Number(limit),
      sort: sort ? { [sort as string]: sortOrder === "asc" ? 1 : -1 } : {},
    });
    res.status(200).send({ posts, page, limit, totalCount });
  } catch (error) {
    res.status(500).send("Failed to fetch posts");
    console.log("[API] Error while fetching Posts");
    console.log("[API] Error :", error);
  }
};

export { createPosts, fetchPosts };
