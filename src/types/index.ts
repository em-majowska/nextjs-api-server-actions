import { Document } from "mongoose";

export type TTodoBase = {
  _id: string;
  title: string;
  isDone: boolean;
};

export type TTodoDB = Document & TTodoBase;
