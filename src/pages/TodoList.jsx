import React, { useState } from "react";
import Layout from "../layout/Layout";
import Form from "../form/Form"
import Header from "../header/Header";
// import List from "../list/List";


const TodoList = () => {
//title과 comment가 set에 영향 받아 바뀌어서 저장됨

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
// const [todos.titleText,setText] =useState("");



// const inputTitle = useRef(null);
// const inputComment =useRef(null);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      {/* <List setTodos={setTodos} todos={todos} /> */}
    </Layout>
  );
};

export default TodoList;