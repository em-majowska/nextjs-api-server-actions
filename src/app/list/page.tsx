import NewTodoForm from "@/components/NewTodoForm";
import TodoCard from "@/components/TodoCard";
import { TTodoDB } from "@/types";
// import Todo from "@/models/Todo";
// import { serialize } from "@/utils/serialize";
import axios from "axios";

const fetchData = async () => {
  try {
    const { data } = await axios.get<TTodoDB[]>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos`,
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Une erreur est survenue");
    }
    return [];
  }
};

const ListPage = async () => {
  // server action
  // const response: TTodoDB[] = await Todo.find();
  // const todos = serialize(response);

  const todos = await fetchData();

  return (
    <div>
      <h1>ListPage</h1>
      <div className="flex flex-col gap-3 ">
        {todos.map((todo) => {
          return <TodoCard key={todo._id} todo={todo} />;
        })}
        <NewTodoForm />
      </div>
    </div>
  );
};

export default ListPage;
