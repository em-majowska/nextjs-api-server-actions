"use client";

import { createTodo } from "@/queries/createTodo";
// import { createTodo } from "@/actions/createTodo";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

const NewTodoForm = () => {
  // server actions
  // const [error, formAction, isPending] = useActionState(createTodo, null);

  const router = useRouter();
  const [error, formAction, isPending] = useActionState(
    (currentError: null | string, formData: FormData) =>
      createTodo(router)(currentError, formData),
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
