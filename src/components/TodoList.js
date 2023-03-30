import React, { useState } from "react";
import CreatePopUp from "./CreatePopUp";
import Item from "./Item";
// import Item from './Item'
import "./TodoList.css";

function TodoList() {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Todo List</h1>
        </div>
        <div id="div1">
          <button type="button" onClick={() => setModal(true)}>
            Create Task
          </button>
          <input
            type="text"
            placeholder="Type to search"
            className="tts"
          ></input>
          <select id="select">
            <option>All</option>
            <option>Complete</option>
            <option>Incomplete</option>
          </select>
          <select id="noofcards">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </nav>

      <Item/>

      <CreatePopUp  toggle={toggle} modal={modal} />
    </div>
  );
}

export default TodoList;
