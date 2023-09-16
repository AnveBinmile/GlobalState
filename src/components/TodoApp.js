import React from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import Value from "./Value";

export default function TodoApp() {
  return (
    <div className="w-[30%] flex flex-col gap-[40px] h-[60%]">
      <InputTodo />
      <TodoList />
      <Value />
    </div>
  );
}
