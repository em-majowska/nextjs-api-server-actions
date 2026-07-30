"use server";

import Todo from "@/models/Todo";
import { TTodoDB } from "@/types";
import { connectToDb } from "@/utils/connectToDb";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
  try {
    await connectToDb();

    // const todo: TTodoDB | null = await Todo.findByIdAndDelete(id);
    const todo: TTodoDB | null = await Todo.findById(id);
    if (!todo) throw new Error("Task not found");

    todo.deleteOne();

    revalidatePath("/list");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Une erreur est survenue");
    }
  }
};
