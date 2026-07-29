"use client";
// server actions
// import { modifyTodo } from "@/actions/modifyTodo";
// import { deleteTodo } from "@/actions/deleteTodo";
import { TTodoDB } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";

const TodoCard = ({ todo }: { todo: TTodoDB }) => {
  const router = useRouter();

  const modifyTodo = async () => {
    try {
      await axios.put<null>(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos/${todo._id}`,
        { isDone: todo.isDone },
      );
      router.refresh();
      return null;
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case "Missing title":
            return console.log(error.message);
          default:
            return console.log("Une erreur est survenue");
        }
      } else {
        return console.log("Une erreur est survenue");
      }
    }
  };
  const deleteTodo = async () => {
    try {
      await axios.delete<null>(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos/${todo._id}`,
      );
      router.refresh();
      return null;
    } catch (error) {
      if (error instanceof Error) {
        return console.log(error.message);
      } else {
        return console.log("Une erreur est survenue");
      }
    }
  };

  return (
    <article className="flex gap-5 w-full justify-evenly items-center text-xl">
      <p>{todo.title}</p>
      <input
        type="checkbox"
        name="isDone"
        checked={todo.isDone}
        // onChange={() => modifyTodo(todo)}
        onChange={modifyTodo}
      />
      <button
        // onClick={() => deleteTodo(todo)}
        onClick={deleteTodo}
        className="bg-red-600 text-white p-3 rounded-md">
        TRASH
      </button>
    </article>
  );
};

export default TodoCard;
