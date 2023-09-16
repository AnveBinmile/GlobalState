import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoCollection } from "./TodoCollection";

export default function TodoList() {
  
  const {todoArray} = useContext(TodoCollection)

  return (
    <div>
      {todoArray.map((item) => {
        return <Todo text={item} />;
      })}
    </div>
  );
}
