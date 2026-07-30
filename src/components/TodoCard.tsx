"use client";
import { deleteTodo } from "@/queries/deleteTodo";
import { modifyTodo } from "@/queries/modifyTodo";
// server actions
// import { modifyTodo } from "@/actions/modifyTodo";
// import { deleteTodo } from "@/actions/deleteTodo";
import { TTodoDB } from "@/types";
import { useRouter } from "next/navigation";

const TodoCard = ({ todo }: { todo: TTodoDB }) => {
  const router = useRouter();

  return (
    <article className="flex gap-5 w-xl px-5 justify-between items-center text-xl">
      <input
        type="checkbox"
        name="isDone"
        checked={todo.isDone}
        // onChange={() => modifyTodo(todo._id)}
        onChange={() => modifyTodo(todo, router)}
      />
      <p>{todo.title}</p>
      <button
        // onClick={() => deleteTodo(todo._id)}
        onClick={() => deleteTodo(todo, router)}
        className="bg-red-600 text-white p-3 rounded-md">
        TRASH
      </button>
    </article>
  );
};

export default TodoCard;
