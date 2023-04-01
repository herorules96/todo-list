import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { decrement, increment } from "./reducers/CounterSlice";
import { useAppSelector, useAppDispatch } from "../src/hooks";
import { ToDoList } from "./Components/ToDoList";
function App() {
  return <ToDoList />;
}

export default App;

// actions : type of event
// reducer : event listener to perform event and update state
// store: give reducer to store
// dispatch: procceds to update the state with the required actions
// selector: extracting specific data from the state that is updated
