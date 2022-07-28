import React from "react"; //리액트사용기본
import "./style.css";       //style.css임포트

// const content = "Typing Effect"
// const text = document.querySelector(".text")
// let index = 0;

function Header(){
    // text.textContent += content[index++]
    // if(index > content.length){
    //     text.textContent = ""
    //     index = 0;
    //   }
    //   setInterval(Header, 500)
    return (
        
        <div className="container">
            <div className="text">My Todo List</div>
            <div>React</div>
        </div>

    ); 
}

export default Header;