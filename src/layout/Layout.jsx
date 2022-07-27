import React from "react"; //useState를 쓰기 위해
import "./style.css";       //style.css임포트
import Header from "../header/Header";
import Form from "../form/Form";

function Layout(){

    return (
        
        <div className="layout">
        <Header />
        <Form />


      </div>

    ); 
}

export default Layout;