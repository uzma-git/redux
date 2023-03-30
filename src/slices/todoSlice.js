import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const LocalTodoList = window.localStorage.getItem("todoList");

  if (LocalTodoList) {
    return JSON.parse(LocalTodoList);
  }
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });

        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    updateTodo : (state,action) =>{

      const todoList = window.localStorage.getItem("todoList");

      if(todoList){
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo,index)=>{
              if(todo.id === action.payload.id){
                todo.taskname = action.payload.taskname;
                todo.status = action.payload.status;
              }
        })

        window.localStorage.setItem('todoList',JSON.stringify(todoListArr));
        state.todoList = todoListArr;

      }

    }


  },
});

export const { addTodo, deleteTodo ,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
