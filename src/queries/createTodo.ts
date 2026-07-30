import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const createTodo = (router: AppRouterInstance) => {
  return async (_currentError: string | null, formData: FormData) => {
    try {
      const title = formData.get("title");
      if (!title) throw new Error("Missing title");

      await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos`, {
        title,
        isDone: false,
      });
      router.refresh();
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
};
