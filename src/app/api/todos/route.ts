import Todo from "@/models/Todo";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_request: NextRequest) => {
  try {
    await connectToDb();

    const todos = await Todo.find();

    return NextResponse.json(todos);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "Une erreur est survenue" },
        { status: 500 },
      );
    }
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectToDb();

    const body = await request.json();
    const newTodo = await Todo.create(body);
    return NextResponse.json({ newTodo }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "Une erreur est survenue" },
        { status: 500 },
      );
    }
  }
};
