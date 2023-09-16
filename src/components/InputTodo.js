import React, { useContext, useReducer } from "react";
import { TodoCollection } from "./TodoCollection";

// const ACTIONS = {
//   ADD_TODO:'add Todo',
//   DEL_TODO:'delete Todo'
// }

// function reducer(state,action){
//   // eslint-disable-next-line default-case
//   switch(action.type){
//     case ACTIONS.ADD_TODO:{
//       return "";
//     }
//   }
// }

export default function InputTodo() {
  const { text, setText, todoArray } = useContext(TodoCollection);

// const [state, dispatch] = useReducer(reducer,{
// })

  const handleInput = (e) => {
    // console.log(text);
    setText(e.target.value);
  };

  const addItem = function (e) {
    console.log(e);
    if (e.key === 'Enter') {
      console.log(e);
      setText("");
      todoArray.push(text);
    }
  };

  return (
    <div className="border-[2px] border-black rounded-[30px]">
      <input
        className=" h-[20px] px-[5px]"
        value={text}
        onKeyDown={addItem}
        onChange={handleInput}
      />
    </div>
  );
}
