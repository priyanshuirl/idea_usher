import express, { Express, Request, Response } from "express";
import { postsRouter } from "./routes/postRoutes";
import { connectToDB } from "./db";
import { tagsRouter } from "./routes/tagRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app: Express = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Priyanshu Idea Usher",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use("/post", postsRouter);
app.use("/tag", tagsRouter);

connectToDB();

app.listen(port, () => {
  console.log(`[server]: Server is running on ${port}`);
});
