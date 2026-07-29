"use client";

// import { createTodo } from "@/actions/createTodo";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

const NewTodoForm = () => {
  // server actions
  // const [error, formAction, isPending] = useActionState(createTodo, null);

  const router = useRouter();
  const [error, formAction, isPending] = useActionState(
    async (_currentError: string | null, formData: FormData) => {
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
    },
    null,
  );

  return (
    <form action={formAction} className="flex gap-5 w-full justify-center">
      <input
        type="text"
        name="title"
        className="border-amber-50 border-2 rounded-md text-xl p-2"
      />
      <button
        disabled={isPending}
        className="p-3 bg-green-500 text-white text-xl rounded-md">
        SUBMIT
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default NewTodoForm;
