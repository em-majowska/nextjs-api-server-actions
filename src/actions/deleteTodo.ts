"use server";

import Todo from "@/models/Todo";
import { TTodoDB } from "@/types";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (todo: TTodoDB) => {
  try {
    await Todo.findOneAndDelete({ _id: todo._id });

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
