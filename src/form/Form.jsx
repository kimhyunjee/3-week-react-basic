import React, { useState  } from "react"; //useState,useRef를 쓰기 위해
import "./style.css";       //style.css임포트
import List from "../list/List";


function Form( {todos, setTodos} ) {


const [title, setTitle] = useState("");
const [comment, setComment] = useState("");

const [titleText, setTitleText] =useState(""); 
const [commentText, setCommentText] =useState("");
 

    const addTitle = (event) => {
        // console.log(event.target.value);
        const title = event.target.value;
        // console.log(event);
        setTitle(title); 
        setTitleText(event.target.value);
    };
    // console.log(title);

    const addComment = (event) => {
        // console.log(event.target.value);
        const comment = event.target.value;
        // console.log(event);
        setComment(comment);
        setCommentText(event.target.value);
    };
    // console.log(comment);


    //추가하기 버튼 클릭시 input값 카드로 가서 아래화면에 붙음
    function AddButton() {
        // console.log(this.text.current.value); //안뜸
        // console.log(todos);
        setTodos([
        ...todos,{
        id: todos.length +1, 
        titleText:title, 
        commentText: comment,
        isDone:false }]); //바뀐인풋(value값)
        // setTitle("");
        // setComment("");
        setTitleText(""); 
        setCommentText(""); 
    }
    // console.log(todos); //맨마지막map함수 쓸때 todos의 뭘 가져와야할지 모를때 보자/최종todos

    function completeButton (id) {
      const newTodo = todos.map((todo) => {
        return todo.id === id ? {...todo, isDone:!todo.isDone } : todo
      })
      setTodos(newTodo);
    };
  
    function deleteButton(id) {
      const newTodo = todos.filter((todo)=>{
        return todo.id !==id;
      });
      setTodos(newTodo);
    };
  //   console.log(todos);

  //input 수정 modify1
  // function modify(id) {
  //   const edit = todos.map((todo) => {
  //     if (todos.id === id) {
  //       return (
  //         //input태그에 직접 접근하여 커서 포커스 설정
  //         inputTitle.current.focus(); 
  //         //input태그에 직접 접근하여 input의 value값 가져오기
  //         titleText.text = inputTitle.current.value;
  //       );
  //     } else {
  //       null;
  //     };
  //   });
  //   setTitleText(todos);
  // };

  //input수정 modify2 
  // const modify = (id) => {
  //   setTodos(todos.map((todos) => {
  //     if (todos.id ===id) {
  //       inputTitle.current.focus();
  //       setTodos.text=inputTitle.current.value;
  //       return {...todos, titleText:inputTitle }
  //     } else {
  //       return todos
  //     }
  //   }
  //   ));
  // };
  // console.log(setTodos);

    //input수정 modify3
  // {
  //   todos.map((todo) => {
  //     if (todo.id === id) {
  //       inputTitle.current.focus();
  //       inputComment.current.focus();
  //       todo.textTitle = inputTitle.current.value;
  //     }
  //   });
  //   setTodos(todos);
  //   setTitleText(""); 
  //   setCommentText("");
  // };

    
    return (
        <>
        <div className="add-form">
          <div className="input-group">

            <label className="form-label">제목</label>
            <input 
              type="text"
              name="titleList" 
              className="add-input input-body" 
              onChange={addTitle} 
              value={titleText}
              // ref={inputTitle}
            />

            <label className="form-label">내용</label>
            <input 
              type="text" 
              name="commentList" 
              className="add-input"
              onChange={addComment} 
              value={commentText}
              // ref={inputComment}
            />

          </div>
          <button className= "add-button" onClick={AddButton} > 추가하기 </button>
        </div>

        <List todos={todos} setTodos={setTodos} completeButton={completeButton} deleteButton={deleteButton}
        // modify = {modify}
        /> 
    
        </>

    ); 
    
}

export default Form;