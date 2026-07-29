"use server";

import Todo from "@/models/Todo";
import { TTodoDB } from "@/types";
import { revalidatePath } from "next/cache";

export const modifyTodo = async (todo: TTodoDB) => {
  try {
    const task = await Todo.findOne({ _id: todo._id });

    task.isDone = !task.isDone;
    await task.save();
    revalidatePath("/list");
  } catch (error) {
    if (error instanceof Error) {
      switch (error.message) {
        case "Missing title":
          return "Paramètre manquant";
        default:
          return "Une erreur est survenue";
      }
    } else {
      return "Une erreur est survenue";
    }
  }
};
