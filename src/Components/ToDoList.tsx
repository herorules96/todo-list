import React, { useState } from "react";
import Lists from "./Lists";

export interface ToDoList {
  id: number;
  toDo: string;
  checked: boolean;
}

export const ToDoList = () => {
  const [todo, setTodo] = useState<ToDoList[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");
  const [toDoId, setToDoId] = useState<number>(1);

  const addTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value);
  };

  const addToDo = () => {
    if (newToDo) {
      setToDoId((prevId) => prevId + 1);
      setTodo([
        ...todo,
        {
          id: toDoId,
          toDo: newToDo,
          checked: false,
        },
      ]);
    }
  };

  return (
    <div>
      {todo.length ? <Lists todo={todo} setToDo={setTodo} /> : null}
      <input type="text" onChange={(e) => addTask(e)} value={newToDo} />
      <button onClick={addToDo}>Add</button>
    </div>
  );
};
