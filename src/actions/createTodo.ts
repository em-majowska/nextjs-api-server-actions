"use server";

import Todo from "@/models/Todo";
import { revalidatePath } from "next/cache";

export const createTodo = async (
  _currentError: null | string,
  formData: FormData,
) => {
  try {
    const title = formData.get("title");
    if (!title) throw new Error("Missing title");

    await Todo.create({ title, isDone: false });

    revalidatePath("/list");
    return null;
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
