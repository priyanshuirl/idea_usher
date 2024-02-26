import { Request, Response } from "express";
import { Tags } from "../models/tagModel";

const createTags = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    await Tags.create({ title });
    res.status(201).send("Tag created successfully");
  } catch (error) {
    res.status(500).send("Tag creation failed");
    console.log("[API] Error while creating Tag");
    console.log("[API] Error :", error);
  }
};
const fetchTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tags.find();
    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send("Failed to fetch tags");
    console.log("[API] Error while fetching Tags");
    console.log("[API] Error :", error);
  }
};

export { createTags, fetchTags };
