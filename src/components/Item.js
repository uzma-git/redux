import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Item.css";
// import { AiOutlineCheckSquare } from 'react-icons/ai'
import { MdEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTodo } from "../slices/todoSlice";
function Item({todo} ) {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList)
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    const dispatch = useDispatch()
  const handleDelete = () => {
      dispatch(deleteTodo(todo.id));     
      console.log("deleting")
  };
 return (
    <div>
      <div id="main_container">
        {sortedTodoList && sortedTodoList.length > 0 ? (
          sortedTodoList.map((todo) => (
            <div id="item" key={todo.id}>
              <p id="task_name">{todo.taskname}</p>

              <p id="status">{todo.status}</p>

              <p id="time">{todo.time}</p>

              <p id="edit">
                <MdEditNote  />
              </p>

              <p id="delete">
                <AiOutlineDelete onClick={handleDelete} />
              </p>
            </div>
          ))
        ) : (
          <div id="Todo_Not_Found">"Todo Not Found"</div>
        )}
      </div>
    
    </div>
  );
}

export default Item;
