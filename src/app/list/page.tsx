import NewTodoForm from "@/components/NewTodoForm";
import TodoCard from "@/components/TodoCard";
import { getTodos } from "@/queries/getTodos";
import { TTodoDB } from "@/types";

const ListPage = async () => {
  const todos: TTodoDB[] = await getTodos();

  return (
    <div>
      <h1>ListPage</h1>
      <div className="flex flex-col items-center gap-5 w-full ">
        {todos.map((todo) => {
          return <TodoCard key={todo._id} todo={todo} />;
        })}
        <NewTodoForm />
      </div>
    </div>
  );
};

export default ListPage;
