import React from "react";
import "./style.css";

function Todo({ todo, deleteButton, completeButton, todos,setTodos }) {

  return (

    <div className="todo-container">
    <div>
      <h2 className="todo-title">{todo.titleText}</h2>
      <div>{todo.commentText}</div>
    </div>
    <div className="button-set">
      <button 
        className="todo-delete-button button"
        onClick={ () => deleteButton(todo.id)}>
        삭제하기</button>
      <button 
        className="todo-complete-button button"
        onClick={() => completeButton(todo.id)}>
        {todo.isDone? "취소하기": "완료하기"}</button>
    </div>
  </div>

  );
}

export default Todo;