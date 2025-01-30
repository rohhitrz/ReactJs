import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos=useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {console.log(todos)}
      {todos.map((todo)=>(
        <li className="m-4 " key={todo.id}>{todo.text}
        <button className="m-2 p-4" onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        
        </li>


      ))}
    </>
  );
}

export default Todos;
