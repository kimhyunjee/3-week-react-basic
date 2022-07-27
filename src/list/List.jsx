import React from "react"; //useState를 쓰기 위해
import "./style.css";       //style.css임포트

function List({todos,setTodos,deleteButton,completeButton}){

    console.log(todos);
 

    return (
        
        <div className="list-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">

                {todos.map((todo) => {
                    return todo.isDone===false ? (
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
                              완료하기</button>
                          </div>
                        </div>
                      ) :null;

                })}

          </div>

          <h2 className="list-title">Done..! 🎉</h2>
          <div className="list-wrapper">
            {todos.map((todo) => {
                    if (todo.isDone === true) {
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
                    }else {
                      return null;
                    }
                  })}

          </div>
          

        </div>

    ); 
}

export default List;