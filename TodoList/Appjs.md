```jsx
import "./App.css";  //cs파일 임포트
import React, { useState } from "react"; //useState를 쓰기 위해
import Header from "./header/Header";

function App () {
  //title과 comment가 set에 영향 받아 바뀌어서 저장됨
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [todos, setTodos] = useState([
    {
    id:1,
    titleText: "리액트 공부하기",
    commentText: "리액트 어렵다",
    isDone: false,
    } ,
    {
      id:2,
      titleText: "리액트에서 중요한것",
      commentText: "값을 가져오는 것과 함수명/변수명 잘짓기",
      isDone: false,
      } 
  ]);
  // const wrap = React.useRef(null);
  // console.log(wrap);
  // window.setTimeout(()=> {console.log(wrap);}, 1000);
  //useState대신 ref사용시

  const addTitle = (event) => {
    // console.log(event.target.value);
    const title = event.target.value;
    console.log(event);
    setTitle(title); 
  };
  console.log(title);

  const addComment = (event) => {
    // console.log(event.target.value);
    const comment = event.target.value;
    console.log(event);
    setComment(comment);
  };
  console.log(comment);

  function clickButton() {
    // console.log(this.text.current.value); //안뜸
    console.log(todos);
    setTodos([...todos, {id: todos.length +1, titleText:title, commentText: comment }]); //바뀐인풋(value값)
  }
  console.log(todos); //맨마지막map함수 쓸때 todos의 뭘 가져와야할지 모를때 보자/최종todos

  function completeButton () {
    setTodos([...todos, todos]);

  };

  function deleteButton(todoId) {
    const newTodo = todos.filter((todo)=>{
      return todo.id !==todoId;
    });
    setTodos(newTodo);
  };

  function cancelButton(todoId) {
    const newTodo = todos.map((todo)=> {
      if (todo.id ===todoId) {
        return {
          ...todo, isDone: !todo.isDone,
        };
      } else {
        return {...todo};
      }
    });
    setTodos(newTodo);
  };

  

  return (

    <div >

      <div className="layout">
        <Header />

        <form className="add-form">
          <div className="input-group">

            <label className="form-label">제목</label>
            <input 
              type="text"
              name="titleText" 
              className="add-input input-body" 
              onChange={addTitle} 
              value={todos.titleText} 
            />

            <label className="form-label">내용</label>
            <input 
              type="text" 
              name="commentText" 
              className="add-input"
              onChange={addComment} 
              value={todos.commentText}
            />

          </div>
          <button className= "add-button" onClick={clickButton}> 추가하기 </button>
        </form>

        <div className="list-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">
              <div>
                {todos.map((todo) => {
                  if (!todo.isDone) {
                    return (
                      <div class="todo-container">
                        <div>
                          <h2 class="todo-title">{todo.titleText}</h2>
                          <div>{todo.commentText}</div>
                        </div>
                        <div class="button-set">
                          <button 
                            class="todo-delete-button button"
                            onClick={deleteButton}>
                          삭제하기</button>
                          <button 
                            class="todo-complete-button button"
                            onClick={cancelButton}>
                          취소</button>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
          </div>
          <h2 class="list-title">Done..! 🎉</h2>
          <div class="list-wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
```
