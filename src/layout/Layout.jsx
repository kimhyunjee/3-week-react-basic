import React from "react"; //useState를 쓰기 위해
import "./style.css";       //style.css임포트


const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
