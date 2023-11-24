"use client";

import React, { useState } from "react";

export const Todos = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  console.log(todoList);

  function handleChangeInput(e) {
    setTodo(e.target.value);
  }

  function handleAddToDoList() {
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <div>
      <div className="flex gap-2 ">
        <input
          className="w-full p-3 border-b-2 focus:outline-none focus:border-indigo-500"
          value={todo}
          onChange={handleChangeInput}
        />
        <button
          className="w-full p-3 rounded text-white bg-indigo-500"
          onClick={handleAddToDoList}
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todoList.map((item, index) => {
          return (
            <div key={index} className="text-xl font medium tracking-tight">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
