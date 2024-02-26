import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Post", postsSchema);

export { Posts };
