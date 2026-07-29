import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean,
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
