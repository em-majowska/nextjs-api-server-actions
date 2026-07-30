import { Schema, models, model } from "mongoose";

const todoSchema = new Schema({
  title: String,
  isDone: Boolean,
});

export default models.Todo || model("Todo", todoSchema);
