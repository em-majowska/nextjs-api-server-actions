import { TTodoDB } from "@/types";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const deleteTodo = async (todo: TTodoDB, router: AppRouterInstance) => {
  try {
    await axios.delete<null>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos/${todo._id}`,
    );
    router.refresh();
    return null;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Une erreur est survenue");
    }
  }
};
