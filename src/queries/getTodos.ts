// import Todo from "@/models/Todo";
// import { serialize } from "@/utils/serialize";
import { TTodoDB } from "@/types";
import { connectToDb } from "@/utils/connectToDb";
import axios from "axios";

export const getTodos = async () => {
  try {
    await connectToDb();

    // server action
    // const response: TTodoDB[] = await Todo.find();
    // return serialize(response);

    const { data } = await axios.get<TTodoDB[]>(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/todos`,
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Une erreur est survenue");
    }
  }
};
