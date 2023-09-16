import React from "react";

import { createContext, useState } from "react";

export const TodoCollection = createContext();

const todoArray = ["market", "mths", "problemSolving"];

export default function TodoCollectionContext({ children }) {
  const [text, setText] = useState("");
  return (
    <TodoCollection.Provider
      value={{ text: text, setText: setText, todoArray: todoArray }}
    >
      {children}
    </TodoCollection.Provider>
  );
}
