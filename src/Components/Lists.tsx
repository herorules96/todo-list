import React from "react";
import { ToDoList } from "./ToDoList";

interface Props {
  todo: ToDoList[];
  setToDo: (todo: ToDoList[]) => void;
}

const Lists = ({ todo, setToDo }: Props) => {
  const handleCompleted = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setToDo(
      todo.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            checked: event.target.checked,
          };
        }

        return todoItem;
      })
    );
  };

  const handleDelete = (id: number) => {
    setToDo(todo.filter((todoItem) => todoItem.id !== id));
  };
  return (
    <div>
      {todo.map((toDoItem: ToDoList) => {
        return (
          <div key={toDoItem.id}>
            <input
              type="checkbox"
              checked={toDoItem.checked}
              onChange={(e) => handleCompleted(e, toDoItem.id)}
            />
            <span
              style={{
                textDecoration: toDoItem.checked ? "line-through" : "none",
              }}
            >
              {toDoItem.toDo}
            </span>
            <button onClick={() => handleDelete(toDoItem.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
