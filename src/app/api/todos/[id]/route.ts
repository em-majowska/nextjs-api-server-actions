import Todo from "@/models/Todo";
import { connectToDb } from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    await connectToDb();
    const { id } = await params;
    const todo = await Todo.findById(id);
    if (!todo)
      NextResponse.json({ message: "Task not found" }, { status: 404 });

    return NextResponse.json({ todo }, { status: 200 });
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

export const PUT = async (
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    await connectToDb();
    const { id } = await params;
    const todo = await Todo.findById(id);
    if (!todo)
      NextResponse.json({ message: "Task not found" }, { status: 404 });

    todo.isDone = !todo.isDone;
    await todo.save();

    return NextResponse.json({ todo }, { status: 200 });
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

export const DELETE = async (
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    await connectToDb();
    const { id } = await params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo)
      NextResponse.json({ message: "Task not found" }, { status: 404 });

    return NextResponse.json({ todo }, { status: 200 });
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
