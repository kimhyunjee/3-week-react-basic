import React from "react"; //useState를 쓰기 위해
import Todo from "../todo/Todo";
import "./style.css";       //style.css임포트

function List({todos,setTodos,deleteButton,completeButton}){
    // console.log(todos);

    return (
        
        <div className="list-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">

                {todos.map((todo) => {
                    return todo.isDone===false ? (
                      <Todo 
                      todo={todo}
                      setTodos={setTodos}
                      deleteButton={deleteButton}
                      completeButton={completeButton}
                      />
                      ) :null;
                })}
          </div>

          <h2 className="list-title">Done..! 🎉</h2>
          <div className="list-wrapper">
            {todos.map((todo) => {
                    if (todo.isDone === true) {
                      return (
                        <Todo 
                        todo={todo}
                        setTodos={setTodos}
                        deleteButton={deleteButton}
                        completeButton={completeButton}
                        />
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